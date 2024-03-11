import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

export const getUser = (userRepository: IUserRepository, userId?: string) => {
  return async (): Promise<IUser | null> => {
    if (userId == null) return await Promise.resolve(null);
    try {
      return await userRepository.get(userId);
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };
};
