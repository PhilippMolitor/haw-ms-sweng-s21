import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

export type ThemeProps = PropsWithChildren<{}>;

export const Theme: FC<ThemeProps> = ({
  children,
}: ThemeProps): JSX.Element => (
  <ThemeProvider
    theme={{
      colors: {
        text: '#121025',
        background: '#ffffff',
      },
      fonts: {
        heading: `'Prata', serif`,
        body: `'Poppins', sans-serif`,
      },
    }}>
    {children}
  </ThemeProvider>
);
