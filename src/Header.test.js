import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
  it('should render a header with login button when user is not logged in', () => {

    //SETUP
      // Render the Header with correct props passed in
    render(<Header
      userLoggedIn={false}
      changeLogin={() => {}}
      clickLogout={() => {}}
      />
    )

    expect(screen.getByText('Login')).toBeInTheDocument();
  })

  it('should render a header with logout button when user is logged in', () => {

    //SETUP
      // Render the Header with correct props passed in
    render(<Header
      userLoggedIn={true}
      changeLogin={() => {}}
      clickLogout={() => {}}
      />
    )

    expect(screen.getByText('Logout')).toBeInTheDocument();
  })

  it('should render a header without logout button when user is not logged in', () => {

    //SETUP
      // Render the Header with correct props passed in
    render(<Header
      userLoggedIn={false}
      changeLogin={() => {}}
      clickLogout={() => {}}
      />
    )

    expect(screen.queryByText('Logout')).toBeNull();
  })

  it('should render a header without login button when user is logged in', () => {

    //SETUP
      // Render the Header with correct props passed in
    render(<Header
      userLoggedIn={true}
      changeLogin={() => {}}
      clickLogout={() => {}}
      />
    )

    expect(screen.queryByText('Login')).toBeNull();
  })

  it('should invoke changeLogin when the login button is clicked', () => {
    const fakeChangeLogin = jest.fn();
    render(<Header
      userLoggedIn={false}
      changeLogin={fakeChangeLogin}
      clickLogout={() => {}}
    />);
    //EXECUTION
      //find the button
      //click it
      userEvent.click(screen.getByText('Login'));
    //ASSERTION
      //Was removeIdea run?
      //Was removeIdea run with an argument of 101?
      expect(fakeChangeLogin).toHaveBeenCalled();
      expect(fakeChangeLogin).toHaveBeenCalledTimes(1);
  })
})
