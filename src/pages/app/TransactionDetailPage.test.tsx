import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from '../../utils/Theme';
import { TransactionDetailPage } from './TransactionDetailPage';

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
