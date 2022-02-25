import { makeColumns, makeCountByAge } from './data-utils';

test('renders learn react link', () => {
  const expected = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'favorite_food', headerName: 'Favorite Food', width: 150 },
  ];

  const actual = makeColumns([
    { name: 'jen', city: 'wenquan', favorite_food: 'pizza', },
    { name: 'mark', city: 'lupon', favorite_food: 'burger', },
    { name: 'travis', city: 'youghal', favorite_food: 'tacos', },
  ]);

  expect(actual).toEqual(expected);
});

test('renders learn react link', () => {
  const expected = [
    { food: 'pizza', AverageAAge: 20 }
  ];

  const actual = makeCountByAge([
    { favorite_food: 'pizza', animal_age: 12, },
    { favorite_food: 'pizza', animal_age: 20, },
    
    
  ]);

  expect(actual).toEqual(expected);
});
