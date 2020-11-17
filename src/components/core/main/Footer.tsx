import React from 'react';
import styled from 'styled-components';
import { colors } from 'components/provider';

const Footer: React.FC = () => <FooterContainer>Copyright © 2020 by Fahmi Idris</FooterContainer>;

const FooterContainer = styled('div')`
  margin-top: 100px;
  padding: 3rem 1.5rem 3rem 1.5rem;
  background-color: ${colors.gray1};
  text-align: center;
`;

export default Footer;
