import ReactDOM from 'react-dom';

import { AppPage } from './AppPage';
import { AuthPage } from './AuthPage';
import { SplashPage } from './SplashPage';

describe('<AppPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppPage />, div);
  });
});

describe('<AuthPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthPage />, div);
  });
});

describe('<SplashPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SplashPage />, div);
  });
});
