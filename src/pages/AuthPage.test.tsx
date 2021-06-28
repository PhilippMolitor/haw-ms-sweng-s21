import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import { Theme } from '../utils/Theme';
import { AuthPage } from './AuthPage';

describe('<AuthPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/auth']}>
        <Theme>
          <AuthPage />
        </Theme>
      </MemoryRouter>,
      div
    );
  });
});
