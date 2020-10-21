import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import LogoutButton from './LogoutButton';

describe('LoginButton', () => {
  it('should return a login button as a navLink', () => {

    render(
      <Router>
        <LogoutButton/>
      </Router>
    )

    expect(screen.getByText('Logout')).toBeInTheDocument();
  })
})
