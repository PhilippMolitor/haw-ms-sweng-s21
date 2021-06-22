import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from '../../utils/Theme';
import { AccountDetailPage } from './AccountDetailPage';
import { AccountOverviewPage } from './AccountOverviewPage';
import { TransactionDetailPage } from './TransactionDetailPage';

describe('<AccountDetailPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <BrowserRouter>
          <AccountDetailPage />
        </BrowserRouter>
      </Theme>,
      div
    );
  });
});
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
        <TransactionDetailPage />
      </Theme>,
      div
    );
  });
});
