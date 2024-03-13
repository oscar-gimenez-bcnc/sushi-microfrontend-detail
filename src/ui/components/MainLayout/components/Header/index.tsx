import useHeader from './useHeader';

const Header: React.FC = () => {
  const {
    states: { isMicrofrontend }
  } = useHeader();

  const isMicro = isMicrofrontend === true;

  return (
    !isMicro && (
      <>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-row items-baseline gap-2">
            <h1 className="text-xl font-bold">Sushi Photos</h1> <span className="text-sm text-gray-600">Detail</span>
          </div>
        </div>
        <div className="divider divider-primary" />
      </>
    )
  );
};

export default Header;
