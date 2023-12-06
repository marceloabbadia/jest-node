test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'jonh', mail: 'jonh@test.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'jonh');
  expect(obj.name).toBe('jonh');
});
