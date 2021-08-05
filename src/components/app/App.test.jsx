import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import testData from '../../../test.json';

const server = setupServer(
  rest.get('https://api.disneyapi.dev/characters?page=5', (req, res, ctx) => {
    return res(ctx.json(testData));
  })
);

const server2 = setupServer(
  rest.get('https://api.disneyapi.dev/characters/308', (req, res, ctx) => {
    return res(
      ctx.json({
        _id: 308,
        films: ['Tangled', 'Tangled: Before Ever After'],
        shortFilms: ['Tangled Ever After', 'Hare Peace'],
        tvShows: ['Once Upon a Time', 'Tangled: The Series'],
        videoGames: [
          'Disney Princess Enchanting Storybooks',
          'Hidden Worlds',
          'Disney Crossy Road',
          'Kingdom Hearts III',
        ],
        parkAttractions: ['Celebrate the Magic', 'Jingle Bell, Jingle BAM!'],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Queen_Arianna',
        name: 'Queen Arianna',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
        createdAt: '2021-04-12T01:33:34.458Z',
        updatedAt: '2021-04-12T01:33:34.458Z',
        url: 'https://api.disneyapi.dev/characters/308',
        __v: 0,
      })
    );
  })
);

describe('App component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

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
});

describe('App component', () => {
  beforeAll(() => server2.listen());
  afterAll(() => server2.close());
  it('renders a characters detail page', async () => {
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
