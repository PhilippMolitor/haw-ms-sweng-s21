import ReactDOM from 'react-dom';

import { Theme } from '../utils/Theme';
import { AppPage } from './AppPage';
import { AuthPage } from './AuthPage';
import { SplashPage } from './SplashPage';

describe('<AppPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <AppPage />
      </Theme>,
      div
    );
  });
});

describe('<AuthPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <AuthPage />
      </Theme>,
      div
    );
  });
});

describe('<SplashPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <SplashPage />
      </Theme>,
      div
    );
  });
});
