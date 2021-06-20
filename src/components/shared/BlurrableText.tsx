import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import { useBlur } from '../../stores/blur';

const BlurWrapper = styled.span<{ shouldBlur: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  ${({ shouldBlur }) =>
    shouldBlur &&
    css`
      background-color: ${({ theme }) => theme.colors.text};
    `}
`;

export type BlurrableTextProps = PropsWithChildren<
  HtmlHTMLAttributes<HTMLSpanElement>
>;

export const BlurrableText: FC<BlurrableTextProps> = ({
  children,
  ...props
}: BlurrableTextProps): JSX.Element => {
  const isBlurred = useBlur((s) => s.isBlurred);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BlurWrapper {...props} shouldBlur={isBlurred}>
      {children}
    </BlurWrapper>
  );
};
