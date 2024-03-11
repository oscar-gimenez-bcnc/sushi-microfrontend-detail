import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

interface createApiUserRepositoryProps {
  cacheActions: ICacheActions;
}

// FIXME: This is not used
export const createApiUserWithCacheRepository = ({ cacheActions }: createApiUserRepositoryProps): IUserRepository => {
  const get = async (): Promise<IUser> => {
    throw new Error(`You should know it ;-), you are pointing to a broken database.`);
  };

  return { get };
};
