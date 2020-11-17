import React from 'react';
import styled from 'styled-components';

import { colors } from 'components/provider';

interface Props {
  completed: number;
}

const ProgressBar: React.FC<Props> = ({ completed }) => {
  return (
    <LoadingBarContainer>
      <LoadingBar width={`${completed}%`} />
    </LoadingBarContainer>
  );
};

const LoadingBarContainer = styled('div')`
  width: 100%;
  height: 20px;
  background-color: ${colors.gray3};
  border-radius: 10px;
`;

const LoadingBar = styled('div')<{ width: string }>`
  transition: width 2.5s ease-in-out;
  height: 100%;
  background-color: ${colors.main};
  border-radius: 10px;
  ${(props) => props.width && `width: ${props.width}`}
`;

export default ProgressBar;
