// Counter.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter component with initial value', () => {
  const { getByText } = render(<Counter initialValue={5} />);
  const countElement = getByText(/count/i);
  expect(countElement).toHaveTextContent('Count: 5');
});

test('increments count when button is clicked', () => {
  const { getByText } = render(<Counter />);
  const countElement = getByText(/count/i);
  const incrementButton = getByText(/increment/i);

  expect(countElement).toHaveTextContent('Count: 0');

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('Count: 1');
});

test('decrements count when button is clicked', () => {
  const { getByText } = render(<Counter />);
  const countElement = getByText(/count/i);
  const decrementButton = getByText(/decrement/i);

  expect(countElement).toHaveTextContent('Count: 0');

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('Count: -1');
});

test('resets count to initial value when button is clicked', () => {
  const { getByText } = render(<Counter initialValue={5} />);
  const countElement = getByText(/count/i);
  const incrementButton = getByText(/increment/i);
  const resetButton = getByText(/reset/i);

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('Count: 6');

  fireEvent.click(resetButton);
  expect(countElement).toHaveTextContent('Count: 5');
});


