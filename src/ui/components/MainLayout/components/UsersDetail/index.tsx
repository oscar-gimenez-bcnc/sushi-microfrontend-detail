/// <reference path="../../../../../../node_modules/@types/react/canary.d.ts" />

import useUserDetail from './useUserDetail';
import ErrorData from './components/ErrorData';
import EmptyData from './components/EmptyData';
import Loader from './components/Loader';
import { use, Suspense, FC } from 'react';
import { IUser } from '@/domain/models/IUser';
import { getUser } from '@/application/getUser/getUser';
import { IUserRepository } from '@/domain/ports/IUserRepository';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { createBrokenRepository } from '@/infrastructure/dataSource/BrokenRepository';
import { createEmptyUserRepository } from '@/infrastructure/dataSource/EmptyRepository';
import { createHardcodedUserRepository } from '@/infrastructure/dataSource/HardcodedUserRepository';
import { DataSources } from '@/ui/shared/enums/enums';
import { createApiUserWithCacheRepository } from '@/infrastructure/dataSource/ApiUserWithCacheRepository';
/* 
const fetchUser = async (userId: string): Promise<IUser | undefined> => {
  console.log('fetchUser func');
  console.log('userId');
  console.log(userId);
  // const userFetched = await getUser(createApiUserRepository(), userId)();

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const userFetched = res.json();

  return userFetched;
};

// --
interface UserContentProps {
  userId: string;
}
const UserContent: React.FC<UserContentProps> = ({ userId }) => {
  const user = use(fetchUser(userId));
  return <div className="overflow-x-auto">{!user ? <EmptyData /> : user.name}</div>;
};
// --

const UserDetail: React.FC = () => {
  const pathName = window.location.pathname;
  const userId = pathName.split('/')[1];

  return (
    <Suspense fallback={<Loader />}>
      <UserContent userId={userId} />
    </Suspense>
  );
};

export default UserDetail;
 */
// -------------------------------

const fetchUser = async (userId: any): Promise<IUser | undefined> => {
  const userFetched = await getUser(createApiUserRepository(), userId)();
  return userFetched;
};

interface UserProps {
  messagePromise: Promise<IUser | undefined>;
}
const User: FC<UserProps> = ({ messagePromise }) => {
  const user = use(messagePromise);
  return <h1>{user?.name}</h1>;
};

export default function UserDetail() {
  const pathName = window.location.pathname;
  const userId = pathName.split('/')[1];
  const messagePromise = fetchUser(userId);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <User messagePromise={messagePromise} />
      </Suspense>
    </>
  );
}
