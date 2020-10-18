import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import "jest-environment-jsdom-sixteen";
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
jest.mock('./apiCalls.js');
import Login from './Login';

  describe('Login', () => {
    it('should render the login page when the value of isLoginPage is false', () => {
      render(
        <Router>
          <Login
            addUser={() => {}}
            changeLogin={() => {}} isLoginPage={false}
          />
        </Router>
      )

        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    })
  
  })
