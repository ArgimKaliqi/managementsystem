import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Button from '@mui/material/Button';
import Header from "../../components/Header";
import axios from 'axios'
import { useEffect, useState } from "react";
import { getClients } from "../../util/fetch";



const Clients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    const fetchClients = async () => {
      try {
        getClients().then(function (response){
          setTableData(response.data.reverse())
        })
      } catch ( err) {
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchClients();
  },[])


  const columns = [
    { field: 'clientsId', headerName: "ID"},
    { field: 'clientsName', headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
    { field: 'clientsSurname', headerName: "Surname",},
    { field: 'clientsAddres', headerName: "Address", flex: 1},
    { field: 'cleintsmail', headerName: "Email", flex: 1},
];

  return (
    <Box m="20px">
      <Header title="Clients" subtitle="Add, Edit, Delete clients" />
      <Button variant="contained" sx={{ backgroundColor: colors.blueAccent[700]}}>New Client</Button>
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
        <DataGrid getRowId={(row) => row.clientsId} rows={tableData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Clients;