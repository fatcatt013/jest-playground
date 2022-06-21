const functions = require('./functions');

const initDatabase = () => console.log('Database initialized...');
const closeDatabase = () => console.log('Database closed...');

/*
toBe - for primitive data types
toEqual - for objects and data structures
toBeNull
toBeUndefined
toBeDefined
toBeTruthy
toBeFalsy
.not.
*/

//This code will be executed before each test
beforeEach(() => {
  initDatabase();
});

//This code will be executed after each test
afterEach(() => {
  closeDatabase();
});

//This code will be executed after all tests
afterAll(() => {
  closeDatabase();
});

//This code will be executed before all tests
beforeAll(() => {
  initDatabase();
});

//Describe creates a block that groups together several related tests
describe('Checking add function', () => {
  test('2 + 2 equals 4', () => {
    expect(functions.add(2, 2)).toBe(4);
  });

  test('2 + 2 not equals 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
  });
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('Should create user with firstName and lastName', () => {
  expect(functions.createUser('Brad', 'Pitt')).toEqual({
    firstName: 'Brad',
    lastName: 'Pitt',
  });
});

test('Should be under 1600', () => {
  expect(functions.countLoad(800, 700)).toBeLessThan(1600);
});

//Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
  const usernames = ['karen', 'arnold', 'garfield', 'admin'];
  expect(usernames).toContain('admin');
});

//Working with asynchronous data
//expect.assertions() says how many assertions we are awaiting, to ensure that every async func will
//fire before the test checks.

//Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

//Async await
test('User fetched username should be Bret', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.username).toEqual('Bret');
});
