import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from './data';
import { makeColumns } from './data-utils';



// const rows: GridRowsProp = [
//   { id: 1, col1: 'hello', col2: 'world' },
//   { id: 2, col1: 'studio', col2: 'ghibli' },
//   { id: 3, col1: 'Howls', col2: 'Moving Castle' }
// ];

// const columns: GridColDef[] = [
//   { field: 'col1', headerName: 'Column 1', width: 150 },
//   { field: 'col2', headerName: 'Column 2', width: 150 },
// ];


export default function App() {
  return <>
    <DataGrid columns={makeColumns(data)}
      rows={data} />
  </>;
}

