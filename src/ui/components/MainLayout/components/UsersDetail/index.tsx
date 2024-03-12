// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../../../../node_modules/@types/react/canary.d.ts" />

import { Suspense } from 'react';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { fetchProduct, fetchUser } from '@/ui/shared/lib/helper';
import { createApiProductRepository } from '@/infrastructure/dataSource/ApiProductRepository';
import ProductWidget from './components/ProductWidget/ProductWidget';
import UserWidget from './components/UserWidget/UserWidget';
import ProductWidgetSkeleton from './components/ProductWidget/Skeleton';
import UserWidgetSkeleton from './components/UserWidget/Skeleton';

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
      <div className="mt-4 flex w-full gap-8">
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
