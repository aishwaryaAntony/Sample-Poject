import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
const defaultTheme = createMuiTheme();

const useStyles = makeStyles(theme => ({
  button: {
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    backgroundColor: "#20478E",
    color: "#fff",
    borderRadius: 0,
    padding: "5px 0px",
    '&:hover': {
      backgroundColor: "#20478E",
    },
    margin: defaultTheme.spacing(0, 2)
  },
  icon: {
    color: "#fff",
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: defaultTheme.spacing(1)
  },
}));

const SidebarNav = props => {
  const classes = useStyles();

  return (

    // <Button
    //   className={classes.button}
    //   type="Button"
    //   variant="contained"
    // >
     
    //   Events
    // </Button>

<Typography style={{margin: defaultTheme.spacing(0, 2),fontSize:25,}}>
Events
</Typography>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
