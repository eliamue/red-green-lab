import fetchQuotes from './fetchquotes';

describe('fetchQuotes', () => {
  it('fetches a single futurama character quote from external API', async () => {
    const actual = await fetchQuotes();

    expect(actual).toEqual(expect.any(Object));
    console.log(actual);
  });
});
