import { VFC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as OKFLogo } from '../assets/images/okf-logo.svg';
import { PinInput } from '../components/PinInput';
import { useAuthStore } from '../stores/auth';

export type AuthPageProps = {};

const AuthPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: none;
  color: #ffffff;
  background: #fff;
`;

const LogoStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding-top: 70px;
  width: 80vw;

  .logo {
    width: 3rem;
  }
`;

const IntroBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding-top: 30px;
  width: 80vw;

  text-align: center;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: #000;

  > h2 {
    font-size: 1.7rem;
    color: #121025;
  }
  > p {
    font-family: ${({ theme }) => theme.fonts.body};
  }
`;

export const AuthPage: VFC<AuthPageProps> = (): JSX.Element => {
  // For redirects
  const history = useHistory();

  const { authenticate } = useAuthStore((s) => ({
    authenticate: s.authenticate,
    isAuthenticated: s.isAuthenticated,
  }));

  // Compare Pin and redirect if loggedIn
  const addPin = (pin: string) => {
    authenticate(pin);
    history.push('/app');
  };

  return (
    <AuthPageWrapper>
      <LogoStack>
        <OKFLogo className="logo" />
      </LogoStack>
      <IntroBody>
        <h2>Verification</h2>
        <p>Please enter your pin</p>
      </IntroBody>
      <PinInput btnText="Verify" onVerify={addPin} />
    </AuthPageWrapper>
  );
};
