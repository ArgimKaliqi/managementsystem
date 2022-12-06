import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Button from '@mui/material/Button';
import Header from "../../components/Header";
import axios from 'axios'
import { useEffect, useState } from "react";
import { getCompanies } from "../../util/fetch";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';



const Companies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        getCompanies().then(function (response){
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
    fetchCompanies();
  },[])


  const columns = [
    { field: 'companyId', headerName: "ID"},
    { field: 'cName', headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
    { field: 'cPhonenumber', headerName: "Phone Number",},
    { field: 'cAddress', headerName: "Address", flex: 1},
    { field: 'cEmail', headerName: "Email", flex: 1},
];

  return (
      <Box m="20px">
      <Header title="Companies" subtitle="Add, Edit, Delete Companies" />
      <Link to="/companyForm">
      <Button variant="contained" sx={{ backgroundColor: colors.blueAccent[700]}}>New Company</Button>
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
        <DataGrid getRowId={(row) => row.companyId} rows={tableData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Companies;
