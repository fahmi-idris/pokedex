import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header, Footer } from 'components/core';
import { ScreenLoading } from 'components/loading';

const Pokemon = React.lazy(() => import(/* webpackChunkName: 'pokemon' */ './modules/pokemon/pokemon'));
const PokemonType = React.lazy(() => import(/* webpackChunkName: 'pokemon-type' */ './modules/pokemon/type'));
const PokemonDetail = React.lazy(() => import(/* webpackChunkName: 'pokemon-detail' */ './modules/detail'));

const App: React.FC = () => (
  <>
    <Header />
    <React.Suspense fallback={<ScreenLoading />}>
      <Switch>
        <Route path="/" component={Pokemon} exact />
        <Route path="/page/:page" component={Pokemon} />
        <Route path="/type/:type" component={PokemonType} />
        <Route path="/pokemon/:pokemonId" component={PokemonDetail} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </React.Suspense>
    <Footer />
  </>
);

export default App;
