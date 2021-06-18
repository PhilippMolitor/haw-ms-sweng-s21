import { FC, PropsWithChildren } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuthStore } from '../stores/auth';

export type AuthenticatedRouteProps = PropsWithChildren<RouteProps>;

export const AuthenticatedRoute: FC<AuthenticatedRouteProps> = ({
  children,
  ...props
}: AuthenticatedRouteProps): JSX.Element => {
  const authenticated = useAuthStore((s) => s.isAuthenticated);

  return authenticated ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to="/auth" />
  );
};
