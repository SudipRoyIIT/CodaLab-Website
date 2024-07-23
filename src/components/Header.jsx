import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigation = useNavigate()
  const gotoHome = () => {
    navigation("/");
  }
  
  const gotoAdminPanel = () => {
    window.location.href = "https://coda-lab-admin-panel.vercel.app";
  }

  const gotoIITR = () => {
    window.location.href = "https://www.iitr.ac.in/";
  }
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#f6b72d", height: "67px" }}
    >
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.iconContainer}>
          <img
            style={{
              ...styles.circle,
              ...styles.leftCircle,
              cursor: "pointer",
            }}
            src="https://i.ibb.co/9HcMtHR/codalablogo.png"
            alt="icon"
            className="icon-image"
            onClick={gotoHome}
          />
        </Box>
        <Box sx={styles.logo}>
          <Typography variant="h6" component="h1" sx={styles.heading}>
            CoDA Lab @IITR
          </Typography>
          <Typography component="p" sx={styles.paragraph}>
            Computing and Design Automation Laboratory Research Group
          </Typography>
        </Box>
        <Box sx={styles.iconContainer} onClick={gotoAdminPanel}>
          <IconButton color="inherit">
            <AccountCircle sx={styles.accountIcon} />
          </IconButton>
        </Box>
        <Box sx={styles.iconContainer} onClick={gotoIITR}>
        
      
          <img
            style={{ ...styles.circle, ...styles.rightCircle }}
            src="https://i.ibb.co/J2mDJ8c/IITR-new-logo-color.jpg"
            alt="icon"
            className="icon-image"
          />
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
  },
  circle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#d3d3d3",
  },
  leftCircle: {
    border: "2px solid #fff",
    marginLeft: "15px",
    width: "50px",
    height: "50px",
  },
  rightCircle: {
    marginRight: "10px",
    width: "50px",
    height: "50px",
  },
  logo: {
    marginLeft: "25px",
    flexGrow: 1,
  },
  heading: {
    fontSize: "1.5rem",
    color: "black",
  },
  paragraph: {
    fontSize: "1rem",
    color: "black",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "25px",
    cursor: "pointer",
  },
  accountIcon: {
    fontSize: "2rem",
    color: "#3f51b5",
  },
};

export default Header;
