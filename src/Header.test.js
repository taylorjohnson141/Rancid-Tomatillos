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
})
