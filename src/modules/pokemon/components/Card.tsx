import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { colors, fonts } from 'components/provider';
import { ResponsiveFlex } from 'modules/components';

import { PokemonList } from 'interfaces/pokemon';

import { renderPokemonId, renderPokemonImage } from 'utils/formatter';

interface Props extends RouteComponentProps {
  data: PokemonList;
}

const Card: React.FC<Props> = ({ data, history }) => {
  const pokemonId = renderPokemonId(data);
  return (
    <CardContainer>
      <CardItem onClick={() => history.push(`/pokemon/${pokemonId}`)}>
        <CardItemImageContainer>
          <CardItemImage src={renderPokemonImage(pokemonId)} />
        </CardItemImageContainer>
        <CardContent>
          <CardContentTitle>{data.name}</CardContentTitle>
          <CardContentSubTitle>{`#${pokemonId}`}</CardContentSubTitle>
        </CardContent>
      </CardItem>
    </CardContainer>
  );
};

const CardContainer = styled('div')`
  flex: 0 0 25%;
  text-align: center;
  padding: 25px;

  ${ResponsiveFlex};
`;

const CardItem = styled('div')`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;
`;

const CardItemImageContainer = styled('div')`
  background: ${colors.gray3};
  padding: 20px;
`;

const CardItemImage = styled('img')`
  display: inline-block;
  width: 100px;
  height: 100px;
  max-width: 100%;
`;

const CardContent = styled('div')`
  padding: 10px;
`;

const CardContentTitle = styled('h2')`
  font-family: ${fonts.montserratMedium};
  text-transform: capitalize;
  margin: 0;
`;

const CardContentSubTitle = styled('div')`
  font-size: 12px;
  margin-top: 5px;
`;

export default withRouter(Card);
