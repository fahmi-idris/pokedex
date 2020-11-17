import React from 'react';
import styled from 'styled-components';

import { PokemonList } from 'interfaces/pokemon';
import Card from './Card';

interface Props {
  data: PokemonList[];
}

const List: React.FC<Props> = ({ data }) => (
  <CardContainer>
    {data.map((item) => (
      <Card key={item.name} data={item} />
    ))}
  </CardContainer>
);

const CardContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export default List;
