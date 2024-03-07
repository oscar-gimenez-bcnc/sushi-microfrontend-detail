import useHeader from './useHeader';

const Header: React.FC = () => {
  const {
    states: { isCacheEnabled }
  } = useHeader();

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex flex-row items-baseline gap-2">
        {isCacheEnabled === true ? (
          <span className="text-gray-600">Detail Microfrontend</span>
        ) : (
          <>
            <h1 className="text-xl font-bold">Sushi Photos</h1> <span className="text-sm text-gray-600">Detail</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
