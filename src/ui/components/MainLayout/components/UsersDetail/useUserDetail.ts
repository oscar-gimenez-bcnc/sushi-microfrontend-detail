import { GlobalContext } from '@/ui/contexts/GlobalContext';
import { type IHookResponse } from '@/ui/shared/types/types';
import { useContext, useEffect, useState } from 'react';
import { UsersDetailContext } from './contexts/UsersDetailContext';
import { getUser } from '@/application/getUser/getUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { createBrokenRepository } from '@/infrastructure/dataSource/BrokenRepository';
import { createEmptyUserRepository } from '@/infrastructure/dataSource/EmptyRepository';
import { createHardcodedUserRepository } from '@/infrastructure/dataSource/HardcodedUserRepository';
import { DataSources } from '@/ui/shared/enums/enums';
import { createApiUserWithCacheRepository } from '@/infrastructure/dataSource/ApiUserWithCacheRepository';
import { IUser } from '@/domain/models/IUser';

const useUserDetail = (): IHookResponse => {
  const { dataSource, isCacheEnabled, cacheActions } = useContext(GlobalContext);
  const { isLoading, users, errorMessage, setErrorMessage, setUsers, setIsLoading } = useContext(UsersDetailContext);
  /* const [userId, setUserId] = useState<string | undefined>(undefined); */

  /*  useEffect(() => {
    const pathName = window.location.pathname;
    const idFromUrl = pathName.split('/')[1];
    setUserId(idFromUrl);
  }, []); */

  /* useEffect(() => {
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

        console.log('userId');
        console.log(userId);

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
  }, [dataSource, errorMessage, userId]); */

  /* 
  const fetchUser = async (userId: string): Promise<IUser | undefined> => {
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

    console.log('fetchUser hook');
    console.log('userId');
    console.log(userId);
    console.log(userRepository);

    //const userFetched = await getUser(userRepository, userId)();

    /* const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userFetched = res.json(); 

    const userFetched: IUser = {
      website: 'asdasdas',
      id: 165,
      username: 'asdasd',
      phone: 'asdasda',
      name: 'My Name',
      address: { city: 'asd', geo: { lat: 'asd', lng: 'ahsida' }, street: 'aisdas', suite: 'asdas', zipcode: 'asd' },
      company: { bs: 'haosd', name: 'ashidas', catchPhrase: 'asidasd' },
      email: 'haosdlasda'
    };

    return userFetched;
  }; */

  const fetchUser = async (userId: any): Promise<IUser | undefined> => {
    const userFetched = await getUser(createApiUserRepository(), userId)();
    return userFetched;
  };

  return {
    states: { dataSource, users, errorMessage, isCacheEnabled, cacheActions, isLoading /* userId */ },
    actions: { fetchUser }
  };
};

export default useUserDetail;
