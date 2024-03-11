/// <reference path="../../../../../../node_modules/@types/react/canary.d.ts" />

import Loader from './components/Loader';
import { use, Suspense, FC } from 'react';
import { IUser } from '@/domain/models/IUser';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { fetchProduct, fetchUser } from '@/ui/shared/lib/helper';
import { createApiProductRepository } from '@/infrastructure/dataSource/ApiProductRepository';
import { IProduct } from '@/domain/models/IProduct';

interface UserProps {
  userPromise: Promise<IUser | undefined>;
}
const User: FC<UserProps> = ({ userPromise }) => {
  const user = use(userPromise);
  return <h1>{user?.name}</h1>;
};

interface ProductProps {
  productPromise: Promise<IProduct | undefined>;
}
const Product: FC<ProductProps> = ({ productPromise }) => {
  const product = use(productPromise);
  return <h1>{product?.title}</h1>;
};

interface User2Props {
  userId: string;
}
const UserFailing: FC<User2Props> = ({ userId }) => {
  const user = use(fetchUser(createApiUserRepository(), userId));
  return <h1>{user?.name}</h1>;
};

export default function UserDetail() {
  const pathName = window.location.pathname;
  const id = pathName.split('/')[1];

  const userPromise = fetchUser(createApiUserRepository(), id);
  const productPromise = fetchProduct(createApiProductRepository(), id);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <User userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Product productPromise={productPromise} />
      </Suspense>
    </>
  );
}
