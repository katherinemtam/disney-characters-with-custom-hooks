import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharacter } from '../services/disneyApi';

export const useCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  return { characters, loading };
};

export const useCharacter = (id) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharacter(id).then(setCharacter);
  }, []);

  return character;
};
