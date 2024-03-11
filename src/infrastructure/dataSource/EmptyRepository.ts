import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

// This adapter simulates an empty data source
export const createEmptyUserRepository = (): IUserRepository => {
  const get = async (): Promise<IUser> => {
    throw new Error(`You should know it ;-), you are pointing to a empty user.`);
  };

  return { get };
};
