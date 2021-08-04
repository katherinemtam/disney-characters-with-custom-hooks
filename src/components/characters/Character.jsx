import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ id, name, imageUrl }) => {
  return (
    <Link to={id}>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
    </Link>
  );
};

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Character;
