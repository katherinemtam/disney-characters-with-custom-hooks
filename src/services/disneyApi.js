export const fetchCharacters = async () => {
  const res = await fetch('https://api.disneyapi.dev/characters');
  const json = await res.json();
  const data = json.data;

  return data;
};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://api.disneyapi.dev/characters/${id}`);
  const json = await res.json();

  return json;
};
