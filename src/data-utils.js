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