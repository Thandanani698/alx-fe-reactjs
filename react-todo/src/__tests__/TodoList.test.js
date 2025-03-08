// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2); // Initial state has 2 todos
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.submit(input);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3); // After adding a todo
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const firstTodo = screen.getByText('First Todo');
  fireEvent.click(firstTodo);
  expect(firstTodo).toHaveClass('completed'); // Check if the todo is marked as completed
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(1); // After deleting a todo
});
