import React from 'react';
import { useCharacters } from '../../state/character';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

export default CharacterList;
