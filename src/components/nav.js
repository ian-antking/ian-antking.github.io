import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderBar = styled.header`
  width: 100vw;
  height: 8vh;
  background: ${(props) => props.theme.main};
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid ${(props) => props.theme.shadow};
`;

const Logo = styled.h1`
  margin: auto;
  font-family: 'Lobster', cursive;
  color: ${(props) => props.theme.light};

  &:hover {
    color: ${(props) => props.theme.highLight};
    cursor: pointer;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Links = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  margin: auto;
  text-decoration: none;
  font-family: Lobster;
  font-size: 2em;
  color: ${(props) => props.theme.light};

  &:hover {
    color: ${(props) => props.theme.highLight};
  }
`;

const Nav = ({ history }) => (
  <HeaderBar>
    <Brand>
      <Logo onClick={() => history.push('/')}>ᶘ ᵒᴥᵒᶅ Code Bear</Logo>
    </Brand>
    <Links>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Links>
  </HeaderBar>
);

Nav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Nav);
