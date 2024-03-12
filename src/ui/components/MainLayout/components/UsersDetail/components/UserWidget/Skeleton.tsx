import { FC } from 'react';

const UserWidgetSkeleton: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-8 w-full"></div>
      <div className="skeleton h-8 w-28"></div>
      <div className="skeleton h-8 w-28"></div>
      <div className="skeleton h-8 w-full"></div>
      <div className="skeleton h-8 w-28"></div>
    </div>
  );
};

export default UserWidgetSkeleton;
