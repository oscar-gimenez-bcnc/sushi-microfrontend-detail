import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

export const createApiUserRepository = (): IUserRepository => {
  const get = async (userId: string): Promise<IUser> => {
    const source = `https://jsonplaceholder.typicode.com/users/${userId}`;

    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} obtained from ${source}.`);
    }

    const user = await res.json();

    return user;
  };

  return { get };
};
