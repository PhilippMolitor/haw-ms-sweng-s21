import { VFC } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';

import { AccountDetailPage } from './app/AccountDetailPage';

export type AppPageProps = {};

export const AppPage: VFC<AppPageProps> = (): JSX.Element => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      AppPage
      <Link to={`${url}/account/abc`}>Open Account abc</Link>
      <Link to={`${url}/account/xyz`}>Open Account xyz</Link>
      <Route
        path={`${path}/account/:accountId`}
        component={AccountDetailPage}
      />
    </div>
  );
};
