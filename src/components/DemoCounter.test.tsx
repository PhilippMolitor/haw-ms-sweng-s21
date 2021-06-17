import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';

import { DemoCounter } from './DemoCounter';

describe('<DemoCounter>', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoCounter />, div);
  });

  it('has a default initial value of 0', () => {
    render(<DemoCounter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('takes a custom initial value and displays it', () => {
    const component = mount(<DemoCounter initialValue={69} />);
    expect(component.props().initialValue).toBe(69);
  });

  it('displays decrement and increment buttons', () => {
    render(<DemoCounter />);
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('decrements on button click', () => {
    render(<DemoCounter />);
    screen.getByText('-').click();
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('increments on button click', () => {
    render(<DemoCounter />);
    screen.getByText('+').click();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
