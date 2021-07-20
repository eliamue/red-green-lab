import capitalizeAndFilter from './capitalizeandfilter';

describe('capitalizeAndFilter', () => {
  it('capitalizes all strings and filters out any string that starts with the letter F/f.', async () => {
    const kitties = 'teen wolf';
    const expected = 'Teen wolf';
    const actual = await capitalizeAndFilter(kitties);

    expect(actual).toEqual(expected);
  });

});
