import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/:id" component={CharacterDetails} />
      </Switch>
    </>
  );
}
