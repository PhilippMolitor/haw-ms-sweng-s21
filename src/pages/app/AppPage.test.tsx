import ReactDOM from 'react-dom';

import { AccountDetailPage } from './AccountDetailPage';
import { AccountOverviewPage } from './AccountOverviewPage';
import { TransactionDetailPage } from './TransactionDetailPage';

describe('<AccountDetailPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccountDetailPage />, div);
  });
});
describe('<AccountOverviewPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccountOverviewPage />, div);
  });
});
describe('<TransactionDetailPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TransactionDetailPage />, div);
  });
});
