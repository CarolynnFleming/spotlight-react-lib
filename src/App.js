import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from './data';
import { makeColumns, makeCountByAge } from './data-utils';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryPie, VictoryLine } from 'victory';



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
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid columns={makeColumns(data)}
        rows={data} />
    </div>;
    <VictoryChart domainPadding={20}>

      <VictoryAxis
        tickvalues={[5, 10, 15, 20]}
        style={{ axis: { stroke: '#AAD922' },
          axisLabel: { fontSize: 16 },
          ticks: { stroke: '#8CFF98' },
          tickLabels: { fontSize: 10, angle: 90, fill: 'red', fontweight: 'bold', verticalAnchor: 'bottom' }
        }}
      />
      <VictoryAxis dependentAxis />
      <VictoryBar data={makeCountByAge(data)} x='food' y='AverageAAge' />
    </VictoryChart>
    <VictoryPie
      colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
      data={makeCountByAge(data)} x='food' y='AverageAAge' />
    <VictoryChart>
      <VictoryLine style={{
        data: { stroke: '#c43a31' },
        parent: { border: '1px solid #ccc' }

      }} data={makeCountByAge(data)} x='food' y='AverageAAge'/>
    </VictoryChart>
  
  </>;
}

