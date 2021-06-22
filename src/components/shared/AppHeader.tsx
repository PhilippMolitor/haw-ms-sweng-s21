import {
  faChevronLeft,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VFC } from 'react';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

import { useBlur } from '../../stores/blur';

const AppHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
  width: 100%;
  height: 2.4rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  content: '';

  > h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.3rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
  }
`;

const BlurButton = styled.button`
  border: none;
  background: transparent;
`;

export type AppHeaderProps = {
  title: string;
  backUrl?: string;
};

export const AppHeader: VFC<AppHeaderProps> = ({
  title,
  backUrl,
}: AppHeaderProps): JSX.Element => {
  const theme = useTheme();
  const { isBlurred, setBlurred } = useBlur();

  return (
    <AppHeaderWrapper>
      <TitleContainer>
        {backUrl && (
          <Link to={backUrl}>
            <FontAwesomeIcon icon={faChevronLeft} color={theme.colors.text} />
          </Link>
        )}
        <h1>{title}</h1>
      </TitleContainer>
      <BlurButton onClick={() => setBlurred(!isBlurred)}>
        <FontAwesomeIcon
          icon={isBlurred ? faEyeSlash : faEye}
          color={theme.colors.text}
        />
      </BlurButton>
    </AppHeaderWrapper>
  );
};
