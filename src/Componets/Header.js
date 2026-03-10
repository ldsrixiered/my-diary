import React from 'react'
import './Header.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const header = () => {
  const home = 'Home';
  const about = 'About';
  const contact = 'Contact';
  const skills = ' Skills';


  return (
    <Box sx={{ flexGrow: 1 }}>

      {/* here is the nav bar background */}
      <AppBar position="static" sx={{ backgroundColor:"#4D5061"}}> 
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
          >

            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Virtual Assitance Phenommenon
          </Typography>

          <Button sx={{
            color: '#fff',
            '&:hover': {backgroundColor: 'white',
            color:'#4D5061'
            } 
            }}
            > 
            {home} 
          </Button>
          <Button sx={{
            color: '#fff',
            '&:hover': {background: 'white',
            color: '#4D5061'
            }
          }}
          >{about}
          </Button>
          <Button color="inherit"> {skills} </Button>
          <Button color="inherit"> {contact} </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default header
