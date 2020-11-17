import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { get } from 'lodash';

import { PokemonList } from 'interfaces/pokemon';

import { api } from 'utils/api';
import { getAllPokemon } from 'utils/formatter';

import { Container } from 'modules/components';
import { Filter, List, LoadMore } from '../components';

interface Pokemon {
  results: PokemonList[];
}

type Props = RouteComponentProps;

const Pokemon: React.FC<Props> = ({ match }) => {
  const page = get(match, 'params.page', '');
  const [data, setData] = useState<PokemonList[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    api<Pokemon>(getAllPokemon(page))
      .then((response) => setData(response.results))
      .finally(() => setLoading(false));
  }, [match]);

  return (
    <Container>
      <Filter />
      <List data={data} />
      <LoadMore isLoading={isLoading} />
    </Container>
  );
};

export default withRouter(Pokemon);
