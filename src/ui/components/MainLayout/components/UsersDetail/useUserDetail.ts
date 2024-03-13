import { type IHookResponse } from '@/ui/shared/types/types';
import { useContext } from 'react';
import { UsersDetailContext } from './contexts/UsersDetailContext';
import { getUser } from '@/application/getUser/getUser';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { type IUser } from '@/domain/models/IUser';

const useUserDetail = (): IHookResponse => {
  const { isLoading, user, errorMessage, setUser } = useContext(UsersDetailContext);

  const fetchUser = async (userId: string): Promise<IUser | undefined> => {
    const userFetched = await getUser(createApiUserRepository(), userId)();
    return userFetched;
  };

  return {
    states: { user, errorMessage, isLoading },
    actions: { fetchUser, setUser }
  };
};

export default useUserDetail;
