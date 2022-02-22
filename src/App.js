import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';



const rows: GridRowsProp = [
  { id: 1, col1: 'hello', col2: 'world' },
  { id: 2, col1: 'studio', col2: 'ghibli' },
  { id: 3, col1: 'Howls', col2: 'Moving' }
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];


export default function App() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={ rows } columns={ columns } />
    </div>
  );
}

