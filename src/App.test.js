import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const element=render(<App />);
    console.log("element =",element)
  const linkElement = element.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
