import { VFC } from 'react';
import { Link } from 'react-router-dom';

import { useAuthStore } from '../stores/auth';

export type AuthPageProps = {};

export const AuthPage: VFC<AuthPageProps> = (): JSX.Element => {
  const { authenticate, isAuthenticated } = useAuthStore((s) => ({
    authenticate: s.authenticate,
    isAuthenticated: s.isAuthenticated,
  }));

  return (
    <div>
      AuthPage
      <Link to="/app">Open App</Link>
      <button type="button" onClick={() => authenticate('dev')}>
        Authenticate
      </button>
      {isAuthenticated ? 'auth ok' : 'auth not ok'}
    </div>
  );
};
