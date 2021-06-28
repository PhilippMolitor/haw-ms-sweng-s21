import ReactDOM from 'react-dom';

import { Theme } from '../../utils/Theme';
import { AppHeader } from './AppHeader';

describe('<AppHeader>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <AppHeader title="Unit Test" />
      </Theme>,
      div
    );
  });
});
