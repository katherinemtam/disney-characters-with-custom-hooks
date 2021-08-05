import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
