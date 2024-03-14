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
import useUserDetail from './useUserDetail';
import UserWidgetClassicSkeleton from './components/UserWidgetClassic/Skeleton';
import UserWidgetClassic from './components/UserWidgetClassic/UserWidgetClassic';

const UserDetail: React.FC = () => {
  const {
    states: { isMicrofrontend }
  } = useUserDetail();

  const pathName = window.location.pathname;
  const id = isMicrofrontend === true ? pathName.split('/')[2] : pathName.split('/')[1];
  const userPromise = fetchUser(createApiUserRepository(), id);
  const productPromise = fetchProduct(createApiProductRepository(), id);

  return (
    <>
      <div className="mt-4 flex w-full flex-row gap-8">
        <h1>
          Showing detail of ID: <kbd className="kbd kbd-sm">{id}</kbd>
        </h1>
        <a href="/">
          <span>Volver</span>
        </a>
      </div>
      <div className="mt-4 flex w-full gap-8">
        <div className="flex-1">
          {/*  <Suspense fallback={<UserWidgetSkeleton />}>
            <UserWidget userPromise={userPromise} />
          </Suspense> */}
          <Suspense fallback={<UserWidgetClassicSkeleton />}>
            <UserWidgetClassic id={id} />
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
