import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";
import Profile from './Profile';
import SidebarNav from './SidebarNav';
import { createMuiTheme } from "@material-ui/core/styles";



import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const defaultTheme = createMuiTheme();
const useStyles = makeStyles((theme) => ({
  // drawer1: {
  //   width: 240,
  //   height: "calc(100% - 100px)",
  //   borderRight: "3px solid #5186E7",
  //   margin:"75px 0px",
   
   
  // },
  // drawer2: {
  //   width: 240,
  //   height: "calc(100% - 100px)",
  //   borderRight: "3px solid #5186E7",
  //   margin:"75px 0px",
   
   
  // },
  // maindrawer: {
  //   width: 500,
  //   height: "calc(100% - 100px)",
  //   borderRight: "3px solid #5186E7",
  //   margin:"75px 0px",
  //   display: "flex",
  //   flexDirection: "row",
    
    
   
  // },
  // root1: {
  //   width: 240,
  //   backgroundColor: 'red',
  //   display: "flex",
  //   flexDirection: "column",
  //   height: "100%",
  //   padding: defaultTheme.spacing(2),
  // },
  // root2: {
  //   width: 240,
  //   backgroundColor: 'blue',
  //   display: "flex",
  //   flexDirection: "column",
  //   height: "100%",
  //   padding: defaultTheme.spacing(2),
  // },

  
  // divider: {
  //   margin: defaultTheme.spacing(2, 2),
  //   height: 2,
  //   color: "#5186E7",
  //   backgroundColor: "#5186E7"
  // },
  // nav: {
  //   marginBottom: defaultTheme.spacing(3),
  // },
  
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: defaultTheme.spacing(2),
    textAlign: 'center',
    color: "red",
  },
 
}));

const Sidebar = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
   <div>

<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>

   </div>
    
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};



export default Sidebar;
