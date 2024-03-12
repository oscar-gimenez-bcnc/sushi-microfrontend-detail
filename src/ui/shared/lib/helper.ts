import { getProduct } from '@/application/getProduct/getProduct';
import { getUser } from '@/application/getUser/getUser';
import { type IProduct } from '@/domain/models/IProduct';
import { type IUser } from '@/domain/models/IUser';
import { type IProductRepository } from '@/domain/ports/IProductRepository';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

export const fetchUser = async (repository: IUserRepository, userId: string): Promise<IUser | undefined> => {
  const userFetched = await getUser(repository, userId)();
  return userFetched;
};

export const fetchProduct = async (repository: IProductRepository, userId: string): Promise<IProduct | undefined> => {
  const userFetched = await getProduct(repository, userId)();
  return userFetched;
};
