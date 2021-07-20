import capitalizeAndFilter from './capitalizeandfilter';

describe('capitalizeAndFilter', () => {
  it('capitalizes all strings and filters out any string that starts with the letter F/f.', async () => {
    const kitties = ['teen', 'nandor', 'farmer ted', 'Frank'];
    const expected = ['Teen', 'Nandor'];
    const actual = await capitalizeAndFilter(kitties);

    expect(actual).toEqual(expected);
    console.log(kitties);
  });

});
