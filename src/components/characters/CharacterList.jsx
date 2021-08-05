import React from 'react';
import { useCharacters } from '../../state/character';
import { Link } from 'react-router-dom';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Link to={`/${character._id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

export default CharacterList;
