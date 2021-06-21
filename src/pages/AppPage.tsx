import { VFC } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import { AccountDetailPage } from './app/AccountDetailPage';
import { AccountOverviewPage } from './app/AccountOverviewPage';

export type AppPageProps = {};

export const AppPage: VFC<AppPageProps> = (): JSX.Element => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Route exact path={`${path}/`} component={AccountOverviewPage} />
      <Route
        path={`${path}/account/:accountId`}
        component={AccountDetailPage}
      />
    </div>
  );
};
