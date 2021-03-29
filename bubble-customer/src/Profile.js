import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import AccountCircle from "../src/assets/images/account_circle.png";


const defaultTheme = createMuiTheme();

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
    //backgroundColor:'red'
    
  },
  avatar: {
    width: 100,
    height: 100
  },
  name: {
    marginTop: defaultTheme.spacing(1),
    fontSize: 16,
    color: "#20478E",
    fontWeight: "bold"
  },
  chip: {
    backgroundColor:"#FF8C00",
    padding: "3px 15px",
    borderRadius: 15,
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold"
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        src={AccountCircle}
      />
      <Typography
        className={classes.name}
      >
        Gajendra Eggadi
      </Typography>
      <Typography
        className={classes.chip}
      >
        Customer
      </Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};



export default Profile;