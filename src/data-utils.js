import { CurrencyRuble } from '@mui/icons-material';

export function makeColumns(arr) {
  const keys = Object.keys(arr[0]);

  const columns = keys.map(key => {
    return {
      field: key,
      headerName: key.split('_')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' '),
      width: 150
    };
  });
  return columns;
}

export function makeCountByAge(arr) {
  const totaFoods = arr.reduce((acc, curr) => {
    if (acc[curr.name]) {
      acc[curr.favorite_food].count++;
      acc[curr.favorite_food].total = acc[curr.favorite_food].total + curr.animal_age;
    } else {
      acc[curr.favorite_food] = {};
      acc[curr.favorite_food].count = 1;
      acc[curr.favorite_food].total = curr.animal_age;
    }
    return acc;
  }, {});

  return Object.entries(totaFoods)
    .map(entry => ({
      food: entry[0],
      totFavFood: entry[1].total / entry[1].count
    }));

}