import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//Створити сторінки та роути на них
// users
// posts
// comments
// При переході на кожну з них отримувати відповідні
// відповіді від джейсонплейсхолдеру та виводити всі об'єкти