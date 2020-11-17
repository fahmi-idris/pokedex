import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';

const ScreenLoading: React.FC = () => (
  <LoadingContainer>
    <Loading />
  </LoadingContainer>
);

const LoadingContainer = styled('div')`
  display: flex;
  align-items: center;
  flex: 1 auto;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export default ScreenLoading;
