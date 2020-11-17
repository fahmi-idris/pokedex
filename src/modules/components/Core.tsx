import styled, { css } from 'styled-components';
import { breakpoints } from 'components/provider';

/* eslint-disable import/prefer-default-export */
export const Container = styled('div')`
  padding: 100px 50px;
  min-height: calc(100vh - 79px - 97px);
`;

export const ResponsiveFlex = css`
  @media screen and (max-width: ${breakpoints.sm}px) {
    flex: 0 0 100%;
  }
`;
