import { useEffect, useState, VFC } from 'react';
import { Redirect } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';

const SplashPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: none;
  color: #ffffff;
  background: linear-gradient(180deg, #328b5f, #002b2d);
`;

const LogoStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  width: 80vw;

  > h1 {
    font-size: 3rem;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

const IntroBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 80vw;

  text-align: center;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: #ffffff;

  > h2 {
    font-size: 1.7rem;
  }
`;

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
    <SplashPageWrapper>
      <LogoStack>
        <img src="" alt="" />
        <h1>OKFINANCE</h1>
      </LogoStack>

      <IntroBody>
        <h2>Let’s get started</h2>
        Start thinking about how you manage all your finance with ease and
        practicality today.
        <ScaleLoader
          height={25}
          width={6}
          radius={2}
          margin={2}
          color="#ffffff"
        />
      </IntroBody>

      {redirect && <Redirect to="/auth" />}
    </SplashPageWrapper>
  );
};
