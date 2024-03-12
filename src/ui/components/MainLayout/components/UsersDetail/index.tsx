/// <reference path="../../../../../../node_modules/@types/react/canary.d.ts" />

import Loader from './components/Loader';
import { use, Suspense, FC } from 'react';
import { IUser } from '@/domain/models/IUser';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { fetchProduct, fetchUser } from '@/ui/shared/lib/helper';
import { createApiProductRepository } from '@/infrastructure/dataSource/ApiProductRepository';
import ProductWidget from './components/ProductWidget/ProductWidget';
import UserWidget from './components/UserWidget/UserWidget';
import ProductWidgetSkeleton from './components/ProductWidget/Skeleton';
import UserWidgetSkeleton from './components/UserWidget/Skeleton';

interface User2Props {
  userId: string;
}
const UserFailing: FC<User2Props> = ({ userId }) => {
  const user = use(fetchUser(createApiUserRepository(), userId));
  return <h1>{user?.name}</h1>;
};

const UserDetail: React.FC = () => {
  const pathName = window.location.pathname;
  const id = pathName.split('/')[1];

  const userPromise = fetchUser(createApiUserRepository(), id);
  const productPromise = fetchProduct(createApiProductRepository(), id);

  return (
    <>
      <h1>
        Showing detail of ID: <kbd className="kbd kbd-sm">{id}</kbd>
      </h1>
      <div className="flex w-full gap-8 mt-4">
        <div className="flex-1">
          <Suspense fallback={<UserWidgetSkeleton />}>
            <UserWidget userPromise={userPromise} />
          </Suspense>
        </div>
        <div className="flex-1">
          <Suspense fallback={<ProductWidgetSkeleton />}>
            <ProductWidget productPromise={productPromise} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
