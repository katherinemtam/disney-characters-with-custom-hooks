import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../state/character';

const CharacterDetails = () => {
  const { id } = useParams();
  const character = useCharacter(id);

  const films = JSON.stringify(character.films);
  const shortFilms = JSON.stringify(character.shortFilms);
  const tvShows = JSON.stringify(character.tvShows);
  const videoGames = JSON.stringify(character.videoGames);
  const parkAttractions = JSON.stringify(character.parkAttractions);
  const allies = JSON.stringify(character.allies);
  const enemies = JSON.stringify(character.enemies);

  return (
    <section>
      <h2>{character.name}</h2>
      <p>Films: {films}</p>
      <p>Short Films: {shortFilms}</p>
      <p>TV Shows: {tvShows}</p>
      <p>Video Games: {videoGames}</p>
      <p>Park Attractions: {parkAttractions}</p>
      <p>Allies: {allies}</p>
      <p>Enemies: {enemies}</p>
    </section>
  );
};

export default CharacterDetails;
