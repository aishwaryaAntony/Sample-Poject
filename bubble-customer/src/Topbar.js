import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { green } from '@material-ui/core/colors';



const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    //height:100,
    //backgroundColor: "#20478E"
    //backgroundColor: "green"
    backgroundColor: green[600],
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: 15
  },
  imgStyle: {
    height: 40,
    width: 200,
    padding: 5
  },
  toolbar: {
    justifyContent: "center",
    fontSize:25

  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar className={classes.toolbar}>
        <div />
       <text>Bubble </text>
      
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
