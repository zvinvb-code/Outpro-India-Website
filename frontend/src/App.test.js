import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const text = screen.getByText(/transforming ideas/i);
  expect(text).toBeInTheDocument();
});