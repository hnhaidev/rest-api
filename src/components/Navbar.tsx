import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled('div')`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:active {
    color: #000;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/todo/add"> Add Todo </NavLink>
    </Container>
  );
};

export default Navbar;
