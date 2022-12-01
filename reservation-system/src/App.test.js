import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to XXXXX/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders guest registation button', () =>{
  render(<App/>)
  const linkElement = screen.getByText(/Continue as Guest/i)
  expect(linkElement).toBeInTheDocument();
});

test('renders signin button', () =>{
  render(<App/>)
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});