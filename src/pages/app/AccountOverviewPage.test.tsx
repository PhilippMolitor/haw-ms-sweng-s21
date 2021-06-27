import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from '../../utils/Theme';
import { AccountOverviewPage } from './AccountOverviewPage';

describe('<AccountOverviewPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <BrowserRouter>
          <AccountOverviewPage />
        </BrowserRouter>
      </Theme>,
      div
    );
  });
});
