import copyAndPush from './copyandpush';

describe('copyAndPush', () => {
  it('copies original array and pushes a new thing to the copied array', async () => {
    const gremlins = ['Teen Wolf', 'Melhissandre', 'Zoey'];
    const expected = ['Teen Wolf', 'Melhissandre', 'Zoey', 'Pants'];
    const actual = await copyAndPush(gremlins, 'Pants');

    expect(actual).toEqual(expected);
  });

  it('checks that original array was not mutated by teh copying and pushing process', async () => {
    const gremlins = ['Teen Wolf', 'Melhissandre', 'Zoey'];
    copyAndPush(gremlins, 'Pants');

    const expected = ['Teen Wolf', 'Melhissandre', 'Zoey'];
    const actual = gremlins;

    expect(actual).toEqual(expected);
  });

});
