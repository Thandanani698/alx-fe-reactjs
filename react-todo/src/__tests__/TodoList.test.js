import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component with given todos', () => {
  const todos = ['Task 1', 'Task 2'];
  render(<TodoList todos={todos} />);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2);
  expect(todoItems[0]).toHaveTextContent('Task 1');
  expect(todoItems[1]).toHaveTextContent('Task 2');
});
