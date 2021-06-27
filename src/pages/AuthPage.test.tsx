import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from '../utils/Theme';
import { AuthPage } from './AuthPage';

describe('<AuthPage>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Theme>
        <BrowserRouter>
          <AuthPage />
        </BrowserRouter>
      </Theme>,
      div
    );
  });
});

describe('<AuthPage>', () => {
  it('displays verify button', () => {
    render(<AuthPage />);
    expect(screen.getByText('Verify')).toBeInTheDocument();
  });
});
