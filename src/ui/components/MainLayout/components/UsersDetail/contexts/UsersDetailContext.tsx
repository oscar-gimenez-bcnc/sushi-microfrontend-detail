import { type IUser } from '@/domain/models/IUser';
import { createContext, useState } from 'react';

interface IUsersDetailContext {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  errorMessage: string | undefined;
  setErrorMessage: (errorMessage: string | undefined) => void;
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

const UsersDetailContext = createContext<IUsersDetailContext>({
  isLoading: true,
  setIsLoading: () => {},
  errorMessage: undefined,
  setErrorMessage: () => {},
  users: [],
  setUsers: () => {}
});

interface UsersDetailProviderProps {
  children: React.ReactNode;
}

const UsersDetailProvider: React.FC<UsersDetailProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [users, setUsers] = useState<IUser[]>([]);

  const contextValue = {
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
    users,
    setUsers
  };

  return <UsersDetailContext.Provider value={contextValue}>{children}</UsersDetailContext.Provider>;
};

export { UsersDetailContext, UsersDetailProvider };
