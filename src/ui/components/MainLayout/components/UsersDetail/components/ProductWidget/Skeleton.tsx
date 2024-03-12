import { FC } from 'react';

const ProductWidgetSkeleton: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-64 w-full"></div>
      <div className="skeleton h-8 w-28"></div>
      <div className="skeleton h-8 w-full"></div>
      <div className="skeleton h-8 w-28"></div>
      <div className="skeleton h-8 w-full"></div>
      <div className="skeleton h-64 w-full"></div>
      <div className="flex justify-center">
        <div className="skeleton h-8 w-28"></div>
      </div>
      <div className="flex justify-end">
        <div className="skeleton h-8 w-28"></div>
      </div>
    </div>
  );
};

export default ProductWidgetSkeleton;
