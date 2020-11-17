import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { get } from 'lodash';
import styled from 'styled-components';

import { Button } from 'components/button';

interface Props extends RouteComponentProps {
  isLoading: boolean;
}

const LoadMore: React.FC<Props> = ({ match, history, isLoading }) => {
  const page = get(match, 'params.page', '');
  const next = page && page ? parseInt(page as string, 10) + 1 : 2;
  return (
    <LoadMoreContainer>
      <Button disabled={isLoading} onClick={() => history.push(`/page/${next}`)}>
        Load More
      </Button>
    </LoadMoreContainer>
  );
};

const LoadMoreContainer = styled('div')`
  text-align: center;
  margin-top: 50px;
`;

export default withRouter(LoadMore);
