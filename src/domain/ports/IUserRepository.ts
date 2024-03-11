import { type IUser } from '../models/IUser';

export interface IUserRepository {
  get: (userId: string) => Promise<IUser>;
}
