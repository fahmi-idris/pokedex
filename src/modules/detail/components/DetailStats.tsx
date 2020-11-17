import React from 'react';
import styled from 'styled-components';

import { PokemonDetailStats } from 'interfaces/pokemon';

import { fonts } from 'components/provider';
import { ProgressBar } from 'components/progress';

interface Props {
  data: PokemonDetailStats[];
}

const DetailStats: React.FC<Props> = ({ data }) => (
  <DetailInfoContainer>
    <DetailInfoTitle>Stats</DetailInfoTitle>
    {data.map((item) => (
      <DetailInfoStatsContainer key={item.stat.name}>
        <DetailInfoStatsTitle>{item.stat.name}</DetailInfoStatsTitle>
        <ProgressBar completed={item.base_stat} />
      </DetailInfoStatsContainer>
    ))}
  </DetailInfoContainer>
);

const DetailInfoContainer = styled('div')`
  margin-bottom: 20px;
`;

const DetailInfoTitle = styled('h4')`
  font-family: ${fonts.montserratMedium};
`;

const DetailInfoStatsContainer = styled('div')`
  margin-bottom: 10px;
`;

const DetailInfoStatsTitle = styled('span')`
  display: block;
  text-transform: capitalize;
  font-family: ${fonts.montserratRegular};
  margin-bottom: 5px;
`;

export default DetailStats;
