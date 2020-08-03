import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBar = styled.nav`
  width: 100vw;
  height: 8vh;
  background: ${(props) => props.theme.main};
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid ${(props) => props.theme.shadow};
`;

const NavLink = styled(Link)`
  margin: auto;
  text-decoration: none;
  font-size: 2em;
  color: ${(props) => props.theme.light};

  &:hover {
    color: ${(props) => props.theme.highLight};
  }
`;

const Nav = () => (
  <HeaderBar>
    <NavLink to="/projects">Projects</NavLink>
  </HeaderBar>
);

export default Nav;
