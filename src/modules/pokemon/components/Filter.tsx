import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { get } from 'lodash';

import { colors, fonts } from 'components/provider';

type Props = RouteComponentProps;

const types = [
  'fire',
  'water',
  'ice',
  'dragon',
  'fighting',
  'flying',
  'grass',
  'rock',
  'ground',
  'fairy',
  'poison',
  'dark',
  'ghost',
  'electric',
  'steel',
  'bug',
  'normal',
  'psychic',
];

const Filter: React.FC<Props> = ({ history, match }) => {
  const type = get(match, 'params.type', '');
  return (
    <FilterContainer>
      <FilterItem isActive={!type} onClick={() => history.push(`/`)}>
        All
      </FilterItem>
      {types.map((item) => (
        <FilterItem key={item} isActive={item === type} onClick={() => history.push(`/type/${item}`)}>
          {item}
        </FilterItem>
      ))}
    </FilterContainer>
  );
};

const FilterContainer = styled('div')`
  display: flex;
  margin: 0 25px;
  overflow-y: auto;
  border-bottom: 1px solid ${colors.gray2};
`;

const FilterItem = styled('div')<{ isActive: boolean }>`
  padding: 25px;
  text-transform: capitalize;
  font-size: 14px;
  cursor: pointer;
  font-family: ${fonts.montserratMedium};

  &:hover {
    border-bottom: 3px solid ${colors.main};
    padding-bottom: 22px;
  }

  ${(props) =>
    props.isActive &&
    `
    border-bottom: 3px solid ${colors.main};
    padding-bottom: 22px;
  `}
`;

export default withRouter(Filter);
