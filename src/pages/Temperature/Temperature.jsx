import "./temperature.css"
import { DataGrid } from '@mui/x-data-grid';

export default function Temperature() {
    const columns = [
        { field: 'id', headerName: 'No', width: 180 },
        { field: 'day', headerName: 'Day', width: 250 },
        { field: 'temp', headerName: 'Temperature', width: 180 },
        {
          field: 't_lvl',
          headerName: 'Temperature level',
          /*type: 'number',*/
          width: 250,
        },
      
      ];
      
      const rows = [
        { id: 1, day: 'Monday', temp: 38, t_lvl: 'Moderate' },
        { id: 2, day: 'Tuesday', temp: 42, t_lvl: 'High' },
        { id: 3, day: 'Wednesday', temp: 28, t_lvl: 'Low' },
        { id: 4, day: 'Thursday', temp: 31, t_lvl: 'Low' },
        { id: 5, day: 'Friday', temp: 39, t_lvl: 'High' },
        { id: 6, day: 'Saturday', temp: 37, t_lvl: 'Moderate' },
        { id: 7, day: 'Sunday', temp: 30, t_lvl: 'Low' },

      ];

    return (

        <>
        
        <div className="Temperature">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
        <div className="summary" >
            Summarized Table
        </div>

        </>
    )
}


   
