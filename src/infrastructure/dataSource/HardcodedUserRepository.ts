import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

export const createHardcodedUserRepository = (): IUserRepository => {
  const get = async (): Promise<IUser> => {
    const user = {
      id: 1,
      name: 'Bruce',
      username: 'Batman',
      email: 'bruce@batman.com',
      address: {
        street: 'Street 1',
        suite: 'Suite 2',
        city: 'Gotham',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'batman.com',
      company: {
        name: 'DC',
        catchPhrase: 'Comics',
        bs: 'Read for fun'
      }
    };
    return user;
  };

  return { get };
};
