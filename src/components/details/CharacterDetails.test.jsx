import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

describe('CharacterDetails component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetails', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterDetails />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });
});
