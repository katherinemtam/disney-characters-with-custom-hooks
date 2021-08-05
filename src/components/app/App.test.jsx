import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  it('renders a list of characters on the home page', async () => {
    render(
      <MemoryRouter>
        <App initialEntries={['/']} />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });

  it.only('renders a characters detail page', async () => {
    render(
      <MemoryRouter initialEntries={['/308']}>
        <App />
      </MemoryRouter>
    );

    await screen.findByText('Queen Arianna');
    await screen.findByText('Films: ["Tangled","Tangled: Before Ever After"]');
    await screen.findByText('Short Films: ["Tangled Ever After","Hare Peace"]');
    await screen.findByText(
      'TV Shows: ["Once Upon a Time","Tangled: The Series"]'
    );
    await screen.findByText(
      'Video Games: ["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"]'
    );
    await screen.findByText(
      'Park Attractions: ["Celebrate the Magic","Jingle Bell, Jingle BAM!"]'
    );
    await screen.findByText('Allies: []');
    await screen.findByText('Enemies: []');
  });
});
