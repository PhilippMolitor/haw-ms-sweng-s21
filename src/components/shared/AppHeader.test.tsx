import { render, screen } from '@testing-library/react';
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

  it('displays the title prop', () => {
    render(
      <Theme>
        <AppHeader title="Unit Test" />
      </Theme>
    );

    expect(screen.getByText('Unit Test')).toBeInTheDocument();
  });
});
