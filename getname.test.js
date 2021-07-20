import getNames from './getname';

describe('getNames', () => {
  it('gets a list of names', async () => {
    const stats = { name: 'Teen Wolf', age: 999, sex: 'female', species: 'cat' };
    const expected = 'Teen Wolf';
    const actual = getNames(stats);

    expect(actual).toEqual(expected);
  });

});
