import { type IHookResponse } from '@/ui/shared/types/types';
import { useContext } from 'react';
import { UsersDetailContext } from '../../contexts/UsersDetailContext';

const useErrorData = (): IHookResponse => {
  const { errorMessage, setErrorMessage } = useContext(UsersDetailContext);

  const handleOnErrorClick = (): void => {
    setErrorMessage(undefined);
  };

  return {
    states: { errorMessage },
    actions: { handleOnErrorClick }
  };
};

export default useErrorData;
