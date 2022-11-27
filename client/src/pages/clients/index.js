import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Button from '@mui/material/Button';
import Header from "../../components/Header";

const Clients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'ClientsName', headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
    { field: 'surname', headerName: "Surname",},
    { field: 'address', headerName: "Address", flex: 1},
    { field: 'email', headerName: "Email", flex: 1},
    { field: 'access', headerName: "Access Level", flex: 1, renderCell: ({ row: { access }}) => {
        return (
            <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
                access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
            >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "moderator" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color = {colors.grey[100]} sx={{ ml: "5px"}}>
                    {access}
                </Typography>
            </Box>
        )
    }},
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
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Clients;
