import fetchQuotes from './fetchquotes';

describe('fetchQuotes', async () => {
  it('fetches a single futurama character quote from external API');

  const actual = await fetchQuotes();


  expect(actual).toEqual(expect.any(Object));
});
