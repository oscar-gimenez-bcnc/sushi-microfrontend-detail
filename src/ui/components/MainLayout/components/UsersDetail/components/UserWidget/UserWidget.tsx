import { IUser } from '@/domain/models/IUser';
import { FC, use } from 'react';

interface UserWidgetProps {
  userPromise: Promise<IUser | undefined>;
}
const UserWidget: FC<UserWidgetProps> = ({ userPromise }) => {
  const user = use(userPromise);

  console.log(user);

  return (
    <div className="flex flex-col gap-8">
      <h1>{user?.name}</h1>
      <div className="flex flex-row gap-8">
        <h1>{user?.email}</h1>
        <h1>{user?.phone}</h1>
      </div>
    </div>
  );
};

export default UserWidget;
