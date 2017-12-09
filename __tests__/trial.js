/* eslint-disable */

test('Output true when two numbers are equal', () => {
  
  expect(3).toBe(3);
  expect(4).toBe(4);
  expect(5).toBe(5);
});

test('Dont break the system when test fails', () => {
  expect(1).toBe(2);
})

/* eslint-enable */
