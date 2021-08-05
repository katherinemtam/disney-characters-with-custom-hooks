import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, films, tvShows }) => {
  const stringyFilms = JSON.stringify(films);
  const stringyTvShows = JSON.stringify(tvShows);

  return (
    <>
      <h2>{name}</h2>
      <p>Films: {stringyFilms}</p>
      <p>TV Shows: {stringyTvShows}</p>
    </>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
  tvShows: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Character;
