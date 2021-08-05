import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharacter } from '../services/disneyApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);

  return { characters, loading };
};

export const useCharacter = (id) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharacter(id).then(setCharacter);
  }, []);

  return character;
};
