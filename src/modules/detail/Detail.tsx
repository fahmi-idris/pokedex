import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { get } from 'lodash';
import styled from 'styled-components';

import { PokemonDetail } from 'interfaces/pokemon';

import { api } from 'utils/api';
import { capitalize, formatWeight, renderPokemonImage } from 'utils/formatter';

import { colors, fonts } from 'components/provider';
import { Container, ResponsiveFlex } from 'modules/components';
import { ScreenLoading } from 'components/loading';
import { DetailInfo, DetailStats } from './components';

type Props = RouteComponentProps;

const COLORS = [colors.main, colors.secondary, colors.blue, colors.gray1, colors.gray2, colors.gray3, colors.red];

const Detail: React.FC<Props> = ({ match }) => {
  const pokemonId = get(match, 'params.pokemonId', '');
  const [data, setData] = useState<PokemonDetail>();

  useEffect(() => {
    api<PokemonDetail>(`/pokemon/${pokemonId}`).then((response) => setData(response));
  }, [match]);

  if (data) {
    const { id, height, name, abilities, stats, weight, types } = data;
    return (
      <Container>
        <DetailContainer>
          <DetailImageContainer>
            <DetailImage src={renderPokemonImage(id)} />
          </DetailImageContainer>
          <DetailContent>
            <DetailTitle>{`${name} #${id}`}</DetailTitle>
            <DetailInfo title="Height">{formatWeight(height)}</DetailInfo>
            <DetailInfo title="Weight">{formatWeight(weight)}</DetailInfo>
            <DetailInfo title="Abilities">
              {abilities
                .sort((a, b) => a.slot - b.slot)
                .filter((item) => !item.is_hidden)
                .map((item) => capitalize(item.ability.name))
                .join(', ')}
            </DetailInfo>
            <DetailInfo title="Types">
              <DetailTypeContainer>
                {types
                  .sort((a, b) => a.slot - b.slot)
                  .map((item, index) => (
                    <DetailType key={item.slot} index={index}>
                      {item.type.name}
                    </DetailType>
                  ))}
              </DetailTypeContainer>
            </DetailInfo>
            <DetailStats data={stats} />
          </DetailContent>
        </DetailContainer>
      </Container>
    );
  }

  return <ScreenLoading />;
};

const DetailContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const DetailImageContainer = styled('div')`
  flex: 0 0 25%;
  ${ResponsiveFlex};
`;

const DetailImage = styled('img')`
  width: 100%;
`;

const DetailContent = styled('div')`
  flex: 0 0 75%;
  padding: 50px 0;
  ${ResponsiveFlex};
`;

const DetailTitle = styled('h1')`
  font-family: ${fonts.montserratBold};
  text-transform: capitalize;
  margin-bottom: 30px;
`;

const DetailTypeContainer = styled('div')`
  display: flex;
`;

const DetailType = styled('div')<{ index: number }>`
  margin-right: 10px;
  background: ${(props) => (props.index ? COLORS[props.index % COLORS.length] : colors.main)};
  color: ${colors.white};
  padding: 5px 15px;
  border-radius: 5px;
  text-transform: capitalize;
`;

export default withRouter(Detail);
