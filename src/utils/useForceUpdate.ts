import { useCallback, useState } from 'react';

export default function useForceUpdate(): () => void {
  const forceUpdate: () => void = useState({})[1].bind(null, {});

  const memoizedDispatch = useCallback((): void => {
    forceUpdate();
  }, [forceUpdate]);
  return memoizedDispatch;
}
