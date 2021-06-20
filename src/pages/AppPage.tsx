import { VFC } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';

import { AccountDetailPage } from './app/AccountDetailPage';
import { AccountOverviewPage } from './app/AccountOverviewPage';

export type AppPageProps = {};

export const AppPage: VFC<AppPageProps> = (): JSX.Element => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <Route exact path={`${path}/`} component={AccountOverviewPage} />
      <Route
        path={`${path}/account/:accountId`}
        component={AccountDetailPage}
      />
      <Link to={url}>Close Accounts</Link>
      <Link to={`${url}/account/abc`}>Open Account abc</Link>
      <Link to={`${url}/account/xyz`}>Open Account xyz</Link>
    </div>
  );
};
