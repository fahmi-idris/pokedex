import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from 'components/provider';

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo>pokedex</Logo>
  </HeaderContainer>
);

const HeaderContainer = styled('div')`
  padding: 20px 30px;
  background-color: ${colors.main};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
`;

const Logo = styled('h1')`
  font-family: ${fonts.montserratBold};
  color: ${colors.white};
  margin: 0;
  text-transform: uppercase;
`;

export default Header;
