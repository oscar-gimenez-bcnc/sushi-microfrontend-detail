import { getProduct } from '@/application/getProduct/getProduct';
import { getUser } from '@/application/getUser/getUser';
import { IProduct } from '@/domain/models/IProduct';
import { IUser } from '@/domain/models/IUser';

export const fetchUser = async (repository: any, userId: any): Promise<IUser | undefined> => {
  const userFetched = await getUser(repository, userId)();
  return userFetched;
};

export const fetchProduct = async (repository: any, userId: any): Promise<IProduct | undefined> => {
  const userFetched = await getProduct(repository, userId)();
  return userFetched;
};
