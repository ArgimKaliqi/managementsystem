import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Button from '@mui/material/Button';
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getWorkers } from "../../util/fetch";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';



const Workers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        getWorkers().then(function (response){
          setTableData(response.data.reverse())
        })
      } catch (err) {
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchWorkers();
  },[])


  const columns = [
    { field: 'workerId', headerName: "ID"},
    { field: 'name', headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
    { field: 'lastName', headerName: "Phone Number",},
    { field: 'address', headerName: "Address", flex: 1},
    { field: 'email', headerName: "Email", flex: 1},
];

  return (
      <Box m="20px">
      <Header title="Workers" subtitle="Add, Edit, Delete Workers" />
      <Link to="/workerForm" style={{ textDecoration: 'none' }}>
      <Button variant="contained" sx={{ backgroundColor: colors.blueAccent[700]}}>New Worker</Button>
      </Link>
      <Box
      m="40px 0 0 0"
      height="65vh"
      sx={{ "& .MuiDataGrid-root":  {border: "none"},
            "& .MuiDataGrid-cell": {borderBottom: "none"},
            "& .name-column--cell": {color: colors.greenAccent[300]},
            "& .MuiDataGrid-columnHeaders": {backgroundColor: colors.blueAccent[700], borderBottom: "none"},
            "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400]},
            "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700]},
            "& .MuiButton-root": {color: colors.blueAccent[600]}
    }}
      >
        <DataGrid getRowId={(row) => row.workerId} rows={tableData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Workers;
