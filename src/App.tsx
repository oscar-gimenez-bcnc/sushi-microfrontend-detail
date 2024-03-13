import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './ui/components/GenericError';
import MainLayout from './ui/components/MainLayout';
import { GlobalProvider } from './ui/contexts/GlobalContext';
import './ui/styles/globals.css';

interface AppProps {
  isMicrofrontend?: boolean;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const isMicrofrontend = props.isMicrofrontend === true;

  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <GlobalProvider isMicrofrontend={isMicrofrontend}>
          <MainLayout />
        </GlobalProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
