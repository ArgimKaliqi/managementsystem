import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from "react-router-dom"
import { tokens } from '../../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'; // Tasks
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'; //Clients
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'; // advocates
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'; // coworkers
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined'; // companies
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined'; // reports
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'; // borxhet
import ShuffleOnOutlinedIcon from '@mui/icons-material/ShuffleOnOutlined'; // paushall
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'; // schedule
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded'; // Line chart

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
  
  const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
  
    return (
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h5" color={colors.grey[100]}>
                    Admin Dashboard
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
  
            {!isCollapsed && (
              <Box mb="25px">
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Admin
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Welcome
                  </Typography>
                </Box>
              </Box>
            )}
  
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
  
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
              <Item
                title="Tasks"
                to="/tasks"
                icon={<PlaylistAddCheckOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Clients"
                to="/clients"
                icon={<Groups2OutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
                <Item
                title="Workers"
                to="/workers"
                icon={<HandshakeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Advocates"
                to="/advocate"
                icon={<BusinessCenterOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Companies"
                to="/companies"
                icon={<AddBusinessOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages and Charts
              </Typography>
              <Item
                title="Reports"
                to="/reports"
                icon={<DocumentScannerOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Borxhet"
                to="/borxhet"
                icon={<PaidOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Paushall"
                to="/paushall"
                icon={<ShuffleOnOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Schedule"
                to="/schedule"
                icon={<CalendarMonthOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Charts"
                to="/charts"
                icon={<InsertChartOutlinedRoundedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    );
  };

export default Sidebar