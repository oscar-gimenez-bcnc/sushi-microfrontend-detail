import IconEnvelope from '@/ui/components/shared/icons/IconEnvelope';
import IconUser from '@/ui/components/shared/icons/IconUser';
import { type FC, useEffect, useState } from 'react';
import IconBuildingOffice2 from '@/ui/components/shared/icons/IconBuildingOffice2';
import IconPhone from '@/ui/components/shared/icons/IconPhone';
import IconGlobeAlt from '@/ui/components/shared/icons/IconGlobeAlt';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { fetchUser } from '@/ui/shared/lib/helper';
import { type IUser } from '@/domain/models/IUser';

interface UserWidgetClassicProps {
  id: string;
}
const UserWidgetClassic: FC<UserWidgetClassicProps> = ({ id }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetch = async () => {
      const user = await fetchUser(createApiUserRepository(), id);
      setUser(user);
    };

    void fetch();
  }, [id]);

  setTimeout(() => {
    setUser(user);
  }, 5000); // This delay is intentional to show the skeleton in ProductWidget

  console.log(user);

  return (
    <div className="card border border-gray-200 bg-gray-100 shadow-xl">
      <div className="flex flex-col">
        <h1 className="mx-3 rounded-lg bg-indigo-300 py-1 text-center text-2xl font-bold text-gray-800">
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

export default UserWidgetClassic;
