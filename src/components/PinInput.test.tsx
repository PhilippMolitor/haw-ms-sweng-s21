import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

import { PinInput } from './PinInput';

describe('<PinInput>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <PinInput btnText="Unit Test Button" onVerify={() => undefined} />,
      div
    );
  });

  it('displays the button text prop', () => {
    render(<PinInput btnText="Unit Test Button" onVerify={() => undefined} />);
    expect(screen.getByText('Unit Test Button')).toBeInTheDocument();
  });

  /*
  it('calls the click callback on verify', () => {
    const callback = jest.fn();

    render(<PinInput btnText="Unit Test Button" onVerify={() => callback()} />);

    expect(callback).toBeCalledTimes(0);
    const button = screen.getByText('Unit Test Button');
    act(() => {
      button.click();
    });
    expect(callback).toBeCalledTimes(1);
  });
  */
});
