import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
// import SignIn from './SignIn';
// import UserForm from './SignUp';

export default function Home({isLogin=false}) {
   const navigate = useNavigate();
   const handleLogin = ()=>{
    navigate('/login')
   }
   const handleRegister = ()=>{
    navigate('/register')
   }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={handleRegister}>SignUp</Button>
          <Button color="inherit" onClick={handleLogin}>Login</Button>
        </Toolbar>
      </AppBar>
      {/* {isLogin ? (<SignIn />) : (<UserForm />)} */}
    </Box>
  );
}
