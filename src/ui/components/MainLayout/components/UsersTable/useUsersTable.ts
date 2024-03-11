import { GlobalContext } from '@/ui/contexts/GlobalContext';
import { type IHookResponse } from '@/ui/shared/types/types';
import { useContext, useEffect, useState } from 'react';
import { UsersTableContext } from './contexts/UsersTableContext';
import { getUser } from '@/application/getUser/getUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { createBrokenRepository } from '@/infrastructure/dataSource/BrokenRepository';
import { createEmptyUserRepository } from '@/infrastructure/dataSource/EmptyRepository';
import { createHardcodedUserRepository } from '@/infrastructure/dataSource/HardcodedUserRepository';
import { DataSources } from '@/ui/shared/enums/enums';
import { createApiUserWithCacheRepository } from '@/infrastructure/dataSource/ApiUserWithCacheRepository';

const useUsersTable = (): IHookResponse => {
  const { dataSource, isCacheEnabled, cacheActions } = useContext(GlobalContext);
  const { isLoading, users, errorMessage, setErrorMessage, setUsers, setIsLoading } = useContext(UsersTableContext);
  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const pathName = window.location.pathname;
    const idFromUrl = pathName.split('/')[1];
    setUserId(idFromUrl);
  }, []);

  useEffect(() => {
    const dataFetcher = async (): Promise<void> => {
      setIsLoading(true);
      setErrorMessage(undefined);

      try {
        const userRepositoryMap: { [key in DataSources]: () => IUserRepository } = {
          [DataSources.EXTERNAL]:
            isCacheEnabled && cacheActions !== undefined
              ? () => createApiUserWithCacheRepository({ cacheActions })
              : createApiUserRepository,
          [DataSources.INTERNAL]: createHardcodedUserRepository,
          [DataSources.EMPTY]: createEmptyUserRepository,
          [DataSources.BROKEN]: createBrokenRepository
        };

        const userRepository = userRepositoryMap[dataSource as DataSources]();

        const userFetched = await getUser(userRepository, userId)();
        console.log(userFetched); // TODO:
        // setUsers(usersFetched);
      } catch (err) {
        setUsers([]);
        const message = err instanceof Error ? err.message : 'No information provided.';
        setErrorMessage(`Oops! We have difficulties to show this data. ${message}`);
      } finally {
        setIsLoading(false);
      }
    };
    if (userId !== undefined) {
      void dataFetcher();
    }
  }, [dataSource, errorMessage, userId]);

  return {
    states: { users, errorMessage, isLoading, userId }
  };
};

export default useUsersTable;
