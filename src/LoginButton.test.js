import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import LoginButton from './LoginButton';

describe('LoginButton', () => {
  it('should return a login button as a navLink', () => {

    render(
      <Router>
        <LoginButton/>
      </Router>
    )

    expect(screen.getByText('Login')).toBeInTheDocument();
  })
})
