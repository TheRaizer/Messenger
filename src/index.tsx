import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './styles/globalStyles';
import { useAppSelector } from './redux/hooks';
import { selectAppConfig } from './redux/slices/appConfigSlice';
import { AppLifeCycle } from './components/AppLifeCycle';
import { ViewportStates } from './types/redux/slices/AppConfigSlice.type';
import { Provider } from 'react-redux';
import { store } from './redux/store';

declare module 'styled-components' {
  export interface DefaultTheme {
    viewportState: ViewportStates;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PageComponent = (): ReactElement => {
  const { viewportState } = useAppSelector(selectAppConfig);

  return (
    <ThemeProvider theme={{ viewportState }}>
      <App />
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <PageComponent />
      <AppLifeCycle />
    </Provider>
  </React.StrictMode>
);
