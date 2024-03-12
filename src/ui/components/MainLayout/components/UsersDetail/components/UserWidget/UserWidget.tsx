import { IUser } from '@/domain/models/IUser';
import IconEnvelope from '@/ui/components/shared/icons/IconEnvelope';
import IconUser from '@/ui/components/shared/icons/IconUser';
import { FC, use, useContext } from 'react';
import useUserDetail from '../../useUserDetail';
import IconBuildingOffice2 from '@/ui/components/shared/icons/IconBuildingOffice2';
import IconPhone from '@/ui/components/shared/icons/IconDownload copy';
import IconGlobeAlt from '@/ui/components/shared/icons/IconGlobeAlt';

interface UserWidgetProps {
  userPromise: Promise<IUser | undefined>;
}
const UserWidget: FC<UserWidgetProps> = ({ userPromise }) => {
  const user = use(userPromise);
  const {
    actions: { setUser }
  } = useUserDetail();

  setTimeout(() => {
    setUser(user);
  }, 5000); // This delay is intentional to show the skeleton in ProductWidget

  console.log(user);

  return (
    <div className="card bg-gray-100 shadow-xl border border-gray-200">
      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-bold bg-indigo-300 rounded-lg mx-3 py-1 text-gray-800">
          Featured photographer
        </h1>
        <div>
          <div className="card-body">
            <h2 className="card-title pb-4">Hi! My name is {user?.name}</h2>

            <div className="flex flex-col gap-4 ">
              <div className="flex flex-row gap-2">
                <IconUser />
                {user?.username}
              </div>
              <div className="flex flex-row gap-2">
                <IconPhone />
                {user?.phone}
              </div>
              <div className="flex flex-row gap-2">
                <IconEnvelope />
                {user?.email}
              </div>
              <div className="flex flex-row gap-2">
                <IconGlobeAlt />
                {user?.website}
              </div>
              <div className="flex flex-row gap-2">
                <IconBuildingOffice2 />
                {user?.company.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWidget;
