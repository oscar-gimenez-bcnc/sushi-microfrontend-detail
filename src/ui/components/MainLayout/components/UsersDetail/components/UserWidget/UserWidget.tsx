import { IUser } from '@/domain/models/IUser';
import { FC, use } from 'react';

interface UserWidgetProps {
  userPromise: Promise<IUser | undefined>;
}
const UserWidget: FC<UserWidgetProps> = ({ userPromise }) => {
  const user = use(userPromise);
  return <h1>{user?.name}</h1>;
};

export default UserWidget;
