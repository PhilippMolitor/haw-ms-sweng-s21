import { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppPage } from './pages/AppPage';
import { AuthPage } from './pages/AuthPage';
import { SplashPage } from './pages/SplashPage';

export type AppProps = {};

export const App: VFC<AppProps> = (): JSX.Element => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/app" component={AppPage} />
      </Switch>
    </BrowserRouter>
  </div>
);
