import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Campaign from './campaigns';

const drawerWidth = 240;

export default function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Color Latino Text App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton component={Link} to="/campaigns">
              <ListItemText primary="Campaign List" />
            </ListItemButton>
            <ListItemButton component={Link} to="/volunteers">
              <ListItemText primary="Volunteer List" />
            </ListItemButton>
            <ListItemButton component={Link} to="/performance">
              <ListItemText primary="Performance" />
            </ListItemButton>
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Typography paragraph>TEST HOME</Typography>} />
            <Route path="/campaigns" element={<Campaign />} />
            <Route path="/volunteers" element={<Typography paragraph>TEST volunteers</Typography>} />
            <Route path="/performance" element={<Typography paragraph>TEST performance</Typography>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
