import { IUser } from '@/domain/models/IUser';
import { FC, use } from 'react';

interface UserWidgetProps {
  userPromise: Promise<IUser | undefined>;
}
const UserWidget: FC<UserWidgetProps> = ({ userPromise }) => {
  const user = use(userPromise);

  console.log(user);

  return (
    <div className="card bg-gray-100 shadow-xl border border-gray-200">
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-2xl font-bold bg-indigo-300 rounded-lg mx-3 py-1 text-gray-700">
          Featured photographer
        </h1>
        <div>
          <div className="card-body">
            <h2 className="card-title">{user?.name}</h2>

            <div className="flex flex-col gap-4">
              <p>{user?.name}</p>
              <p>{user?.email}</p>
              <p>{user?.address.city}</p>
              <p>{user?.address.street}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWidget;
