import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from '../../utils/Theme';
import { AccountOverviewPage } from './AccountOverviewPage';
import { TransactionDetailPage } from './TransactionDetailPage';

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
describe('<TransactionDetailPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <BrowserRouter>
          <TransactionDetailPage />
        </BrowserRouter>
      </Theme>,
      div
    );
  });
});
