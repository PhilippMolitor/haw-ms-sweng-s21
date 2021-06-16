import { VFC } from 'react';
import { Link } from 'react-router-dom';

export type AuthPageProps = {};

export const AuthPage: VFC<AuthPageProps> = (): JSX.Element => (
  <div>
    AuthPage
    <Link to="/app">Open App</Link>
  </div>
);
