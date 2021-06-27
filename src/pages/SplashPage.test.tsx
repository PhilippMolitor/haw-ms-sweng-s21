import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from '../utils/Theme';
import { SplashPage } from './SplashPage';

describe('<SplashPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <BrowserRouter>
          <SplashPage />
        </BrowserRouter>
      </Theme>,
      div
    );
  });
});
