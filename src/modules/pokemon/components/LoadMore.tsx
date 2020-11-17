import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { get } from 'lodash';
import styled from 'styled-components';

import { Button } from 'components/button';

type Props = RouteComponentProps;

const LoadMore: React.FC<Props> = ({ match, history }) => {
  const page = get(match, 'params.page', '');
  const next = page && page ? parseInt(page as string, 10) + 1 : 2;
  return (
    <LoadMoreContainer>
      <Button onClick={() => history.push(`/page/${next}`)}>Load More</Button>
    </LoadMoreContainer>
  );
};

const LoadMoreContainer = styled('div')`
  text-align: center;
  margin-top: 50px;
`;

export default withRouter(LoadMore);
