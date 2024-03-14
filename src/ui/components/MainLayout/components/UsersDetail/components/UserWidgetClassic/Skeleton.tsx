import { type FC } from 'react';

const UserWidgetClassicSkeleton: FC = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="skeleton h-8 w-full"></div>
      <div className="skeleton h-8 w-28"></div>
      <div className="skeleton h-8 w-28"></div>
      <div className="skeleton h-8 w-full"></div>
      <div className="skeleton h-8 w-28"></div>
    </div>
  );
};

export default UserWidgetClassicSkeleton;
