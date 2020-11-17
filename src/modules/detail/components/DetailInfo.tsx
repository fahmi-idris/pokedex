import React from 'react';
import styled from 'styled-components';

import { fonts } from 'components/provider';

interface Props {
  title: string;
}

const DetailInfo: React.FC<Props> = ({ title, children }) => (
  <DetailInfoContainer>
    <DetailInfoTitle>{title}</DetailInfoTitle>
    {children}
  </DetailInfoContainer>
);

const DetailInfoContainer = styled('div')`
  margin-bottom: 20px;
`;

const DetailInfoTitle = styled('h4')`
  font-family: ${fonts.montserratMedium};
`;

export default DetailInfo;
