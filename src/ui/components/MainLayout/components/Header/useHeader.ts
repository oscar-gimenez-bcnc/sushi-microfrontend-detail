import { useContext } from 'react';
import { GlobalContext } from '@/ui/contexts/GlobalContext';
import { type IHookResponse } from '@/ui/shared/types/types';

const useHeader = (): IHookResponse => {
  const { isMicrofrontend } = useContext(GlobalContext);

  return {
    actions: {},
    states: { isMicrofrontend }
  };
};

export default useHeader;
