import React from 'react';
import { render, screen } from '@testing-library/react';


test('renders learn react link', () => {

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//Створити сторінки та роути на них
// users
// posts
// comments
// При переході на кожну з них отримувати відповідні
// відповіді від джейсонплейсхолдеру та виводити всі об'єкти