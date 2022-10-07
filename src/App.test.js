import { render, screen } from '@testing-library/react';
import TaskManager from './TaskManager';

test('renders learn react link', () => {
  render(<TaskManager />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
