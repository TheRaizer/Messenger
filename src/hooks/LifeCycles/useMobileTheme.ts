import { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectAppConfig,
  setViewportState,
} from '../../redux/slices/appConfigSlice';
import { ViewportStates } from '../../types/redux/slices/AppConfigSlice.type';
import { useWindowDimensions } from '../useWindowDimensions';

const useMobileTheme = () => {
  const { viewportState } = useAppSelector(selectAppConfig);
  const dispatch = useAppDispatch();
  const viewportStateRef = useRef(viewportState);

  const changeViewportState = useCallback(
    (newViewportState: ViewportStates) => {
      if (viewportStateRef.current !== newViewportState) {
        dispatch(setViewportState(newViewportState));
        viewportStateRef.current = newViewportState;
      }
    },
    [dispatch]
  );

  const handleResize = useCallback(
    ({ width }: { width: number; height: number }) => {
      if (width > 900) {
        changeViewportState(ViewportStates.DESKTOP);
      } else if (width <= 900 && width >= 650) {
        changeViewportState(ViewportStates.TABLET);
      } else {
        changeViewportState(ViewportStates.MOBILE);
      }
    },
    [changeViewportState]
  );

  useWindowDimensions(handleResize);
};

export default useMobileTheme;
