import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from '../utils/Theme';
import { AppPage } from './AppPage';

describe('<AppPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <BrowserRouter>
          <AppPage />
        </BrowserRouter>
      </Theme>,
      div
    );
  });
});
