import React, { useState } from 'react';
import { useCharacters } from '../../state/character';
import { Link } from 'react-router-dom';
import Character from './Character';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { characters, loading } = useCharacters(page);

  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Link to={`/${character._id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <button
        disabled={page <= 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >
        &lt;
      </button>
      Page {page}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{characterElements}</ul>
    </>
  );
};

export default CharacterList;
