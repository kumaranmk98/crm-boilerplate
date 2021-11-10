const sum = (a, b) => a + b;

describe('Tests on sum function', () => {
  it('Should add numbers properly.', () => {
    expect(sum(3, 5)).toEqual(8);
  });
});
