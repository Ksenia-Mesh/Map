import ErrorRepository from '../js/ErrorRepository';

test('Test 1', () => {
  const error = new ErrorRepository();
  error.add(400, 'ошибка неверного запроса');
  expect(error.translate(400)).toBe('ошибка неверного запроса');
});

test('Test 2', () => {
  const error = new ErrorRepository();
  expect(error.translate(77)).toBe('Unknown error');
});