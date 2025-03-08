import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2);  // Initial state has 2 todos
});

test('can add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('New todo');
  const button = screen.getByText('Add Todo');
  fireEvent.change(input, { target: { value: 'New todo' } });
  fireEvent.click(button);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3);  // 2 initial todos + 1 new todo
});

test('can toggle todo completion', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('can delete a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(1);  // After deletion, only 1 todo remains
});
