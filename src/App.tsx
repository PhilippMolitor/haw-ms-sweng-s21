import { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppPage } from './pages/AppPage';
import { AuthPage } from './pages/AuthPage';
import { SplashPage } from './pages/SplashPage';
import { GlobalStyle } from './utils/GlobalStyle';

export type AppProps = {};

export const App: VFC<AppProps> = (): JSX.Element => (
  <ThemeProvider
    theme={{
      colors: {
        text: '#121025',
        background: '#ffffff',
      },
      fonts: {
        heading: `'Prata', serif`,
        body: `'Poppins', sans-serif`,
      },
    }}>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/app" component={AppPage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);
