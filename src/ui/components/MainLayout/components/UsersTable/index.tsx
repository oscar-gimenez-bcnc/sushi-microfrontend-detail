import useUsersTable from './useUsersTable';
import ErrorData from './components/ErrorData';
import EmptyData from './components/EmptyData';
import Loader from './components/Loader';

const UsersTable: React.FC = () => {
  const {
    states: { users, errorMessage, isLoading }
  } = useUsersTable();

  return errorMessage === undefined ? (
    <div className="overflow-x-auto">
      <table className="table table-md bg-white">
        {isLoading === true ? <Loader /> : users.length === 0 ? <EmptyData /> : 'Hola'}
      </table>
    </div>
  ) : (
    <ErrorData />
  );
};

export default UsersTable;
