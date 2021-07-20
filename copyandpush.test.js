import copyAndPush from './copyandpush';

describe('copyAndPush', () => {
  it('copies and pushes, duh', async () => {
    const gremlins = ['Teen Wolf', 'Melhissandre', 'Zoey'];
    const expected = ['Teen Wolf', 'Melhissandre', 'Zoey', 'Pants'];
    const actual = await copyAndPush(gremlins, 'Pants');

    expect(actual).toEqual(expected);
  });

});
