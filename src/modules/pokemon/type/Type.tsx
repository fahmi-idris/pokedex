import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { get } from 'lodash';

import { PokemonList, PokemonTypeList } from 'interfaces/pokemon';

import { api } from 'utils/api';
import { getPokemonByType } from 'utils/formatter';

import { Container } from 'modules/components';
import { ScreenLoading } from 'components/loading';
import { Filter, List } from '../components';

interface Pokemon {
  pokemon: PokemonTypeList[];
}

type Props = RouteComponentProps;

const PokemonType: React.FC<Props> = ({ match }) => {
  const type = get(match, 'params.type', '');
  const [data, setData] = useState<PokemonList[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    api<Pokemon>(getPokemonByType(type))
      .then((response) => setData(response.pokemon.map((item) => item.pokemon)))
      .finally(() => setLoading(false));
  }, [match]);

  if (isLoading) {
    return <ScreenLoading />;
  }

  return (
    <Container>
      <Filter />
      <List data={data} />
    </Container>
  );
};

export default withRouter(PokemonType);
