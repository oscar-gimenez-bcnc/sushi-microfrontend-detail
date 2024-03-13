import { createContext } from 'react';

interface IGlobalContext {
  isMicrofrontend: boolean;
}

const GlobalContext = createContext<IGlobalContext>({
  isMicrofrontend: false
});

interface GlobalProviderProps {
  children: React.ReactNode;
  isMicrofrontend: boolean;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children, isMicrofrontend }) => {
  const contextValue = {
    isMicrofrontend
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
