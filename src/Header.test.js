import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('should render a header with login button when user is not logged in', () => {

    render(
      <Router>
        <Header
        userLoggedIn={false}
        changeLogin={() => {}}
        clickLogout={() => {}}
        />
      </Router>
    )

    expect(screen.getByText('Login')).toBeInTheDocument();
  })

  it('should render a header with logout button when user is logged in', () => {

    render(
      <Router>
        <Header
        userLoggedIn={true}
        changeLogin={() => {}}
        clickLogout={() => {}}
        />
      </Router>
    )

    expect(screen.getByText('Logout')).toBeInTheDocument();
  })

  it('should render a header without logout button when user is not logged in', () => {

    render(
      <Router>
        <Header
        userLoggedIn={false}
        changeLogin={() => {}}
        clickLogout={() => {}}
        />
      </Router>
    )

    expect(screen.queryByText('Logout')).toBeNull();
  })

  it('should render a header without login button when user is logged in', () => {

    render(
      <Router>
        <Header
        userLoggedIn={true}
        changeLogin={() => {}}
        clickLogout={() => {}}
        />
      </Router>
    )

    expect(screen.queryByText('Login')).toBeNull();
  })

  it('should invoke changeLogin when the login button is clicked', () => {
    const fakeChangeLogin = jest.fn();
    render(
      <Router>
        <Header
        userLoggedIn={false}
        changeLogin={fakeChangeLogin}
        clickLogout={() => {}}
      />
    </Router>
    )

      userEvent.click(screen.getByText('Login'));

      expect(fakeChangeLogin).toHaveBeenCalled();
      expect(fakeChangeLogin).toHaveBeenCalledTimes(1);
  })

  it('should invoke clickLogout when the logout button is clicked', () => {
    const fakeClickLogout = jest.fn();
    render(
      <Router>
        <Header
        userLoggedIn={true}
        changeLogin={() => {}}
        clickLogout={fakeClickLogout}
        />
      </Router>
    );

      userEvent.click(screen.getByText('Logout'));

      expect(fakeClickLogout).toHaveBeenCalled();
      expect(fakeClickLogout).toHaveBeenCalledTimes(1);
  })
})
