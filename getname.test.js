import getNames from './getname';

describe('getNames', () => {
  it('gets a list of names', async () => {
    const dingus = { name: 'Teen Wolf', age: 999, sex: 'female', species: 'cat' };
    const actual = await getNames(dingus);
    const expected = 'Teen Wolf';

    expect(actual).toEqual(expected);
  });

});
