import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  const character = {
    name: 'Queen Arianna',
    films: ['Tangled', 'Tangled: Before Ever After'],
    tvShows: ['Once Upon a Time', 'Tangled: The Series'],
  };

  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(<Character {...character} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
