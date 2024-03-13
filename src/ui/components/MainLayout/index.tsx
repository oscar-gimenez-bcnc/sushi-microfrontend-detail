import Header from './components/Header';
import UsersDetail from './components/UsersDetail';
import { UsersDetailProvider } from './components/UsersDetail/contexts/UsersDetailContext';

const MainLayout: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <Header />
      <UsersDetailProvider>
        <UsersDetail />
      </UsersDetailProvider>
    </div>
  );
};

export default MainLayout;
