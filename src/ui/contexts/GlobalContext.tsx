import { createContext, useState } from 'react';
import { DataSources, DownloadMethods } from '../shared/enums/enums';

interface IGlobalContext {
  dataSource: string;
  setDataSource: (dataSource: string) => void;
  downloadMethod: string;
  setDownloadMethod: (downloadMethod: string) => void;
  isCacheEnabled: boolean;
  cacheActions?: ICacheActions;
}

const GlobalContext = createContext<IGlobalContext>({
  dataSource: DataSources.EXTERNAL,
  setDataSource: () => {},
  downloadMethod: DownloadMethods.JSON,
  setDownloadMethod: () => {},
  isCacheEnabled: false,
  cacheActions: {
    getUsersCacheData: () => undefined,
    renewUsersExpiryDate: () => undefined,
    getUserCache: () => {},
    setUserCache: () => {},
    clearUsersCache: () => {}
  }
});

interface GlobalProviderProps {
  children: React.ReactNode;
  isCacheEnabled: boolean;
  cacheActions?: ICacheActions;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children, isCacheEnabled, cacheActions }) => {
  const [dataSource, setDataSource] = useState<string>(DataSources.EXTERNAL);
  const [downloadMethod, setDownloadMethod] = useState<string>(DownloadMethods.JSON);

  const contextValue = {
    dataSource,
    setDataSource,
    downloadMethod,
    setDownloadMethod,
    isCacheEnabled,
    cacheActions
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
