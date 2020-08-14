import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import devices from '../styles/devices';

const HeaderBar = styled.nav`
  width: 100%;
  height: 8vh;
  background: ${(props) => props.theme.main};
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid ${(props) => props.theme.shadow};
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.light};

  &:hover {
    color: ${(props) => props.theme.highLight};
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    font-size: 2em;
  }
`;

const Brand = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.light};
  margin-right: 20px;
  font-size: 1em;

  &:hover {
    color: ${(props) => props.theme.highLight};
  }

  @media ${devices.mobileL} {
    font-size: 1.5em;
  }
`;

const links = ['about', 'projects', 'contact'];

const renderLinks = (linkNames) =>
  linkNames.map((link) => (
    <NavLink
      key={`${link}-page-link`}
      data-testid={`${link}-link`}
      to={`/${link}`}
    >
      {link.charAt(0).toUpperCase() + link.slice(1)}
    </NavLink>
  ));

const Nav = ({ history }) => (
  <HeaderBar data-testid="nav-bar">
    <Brand>
      <Logo data-testid="home-link" onClick={() => history.push('/')}>
        [IK]
      </Logo>
    </Brand>
    <Links>{renderLinks(links)}</Links>
  </HeaderBar>
);

Nav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Nav);
