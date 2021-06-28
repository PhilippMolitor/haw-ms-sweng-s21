import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import { Theme } from '../utils/Theme';
import { SplashPage } from './SplashPage';

describe('<SplashPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/']}>
        <Theme>
          <SplashPage />
        </Theme>
      </MemoryRouter>,
      div
    );
  });
});
