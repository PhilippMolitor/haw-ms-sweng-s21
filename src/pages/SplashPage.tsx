import { useEffect, useState, VFC } from 'react';
import { Redirect } from 'react-router-dom';

export type SplashPageProps = {};

export const SplashPage: VFC<SplashPageProps> = (): JSX.Element => {
  // should the redirect be executed?
  const [redirect, setRedirect] = useState(false);

  // change state after some time (simulate loading)
  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 3000);
  }, []);

  return (
    <div>
      SplashPage (loading auth...)
      {redirect && <Redirect to="/auth" />}
    </div>
  );
};
