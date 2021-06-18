import {} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
  }
}
