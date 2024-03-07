import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

export const createApiUserRepository = (): IUserRepository => {
  const list = async (): Promise<IUser[]> => {
    const source = 'https://jsonplaceholder.typicode.com/users';

    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} obtained from ${source}.`);
    }

    const users = await res.json();

    return users;
  };

  return { list };
};
