import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
  width: 100vw;
  height: 8vh;
  background: ${(props) => props.theme.main};
  display: flex;
  align-items: space-between;
  border-bottom: 3px solid ${(props) => props.theme.shadow};
`;

const Logo = styled.h1`
  margin: auto;
  font-family: 'Lobster', cursive;
  color: ${(props) => props.theme.light};
`;

const Nav = () => {
  return (
    <HeaderBar>
      <Logo>Ian King</Logo>
    </HeaderBar>
  );
};

export default Nav;
