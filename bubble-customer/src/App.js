import React from 'react';
//import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
//import { Sidebar, Topbar } from './components';

import Typography from '@material-ui/core/Typography';
//import Profile from "./Profile"
import Topbar from "./Topbar"
import Sidebar from "./Sidebar"

import { Divider, Drawer,Button,Fab } from "@material-ui/core";
import Profile from './Profile';
import SidebarNav from './SidebarNav';



import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  
];



function createData(name, email, status) {
  
  return {name, email, status };
}

const rows = [
  createData('Gajendra', 'gajendra@gmail.com','ACTIVE'),
  createData('Gajendra', 'gajendra@gmail.com','ACTIVE'),
  createData('Gajendra', 'gajendra@gmail.com','ACTIVE'),
  createData('Gajendra', 'gajendra@gmail.com','ACTIVE'),
  createData('Gajendra', 'gajendra@gmail.com','ACTIVE'),
  
];



const defaultTheme = createMuiTheme();

const useStyles = makeStyles(theme => ({
  // root: {
  //   backgroundColor:"green",
  //   paddingTop: 56,
  //   height: '100%',
  //   paddingLeft: 250,
  //   [defaultTheme.breakpoints.up('sm')]: {
  //     paddingTop: 64
  //   }
  // },
  // shiftContent: {
  //   paddingLeft: 240,
  //   //backgroundColor:"green"
  // },
  // content: {
  //   height: '100%'
  // },
  root1: {
    //marginTop:400,
    flexGrow: 1,
    //height: "calc(100% - 100px)",
    //backgroundColor:'red',
   // height: '100%'
   

  },
  paper: {
    marginTop:60,
    //padding: defaultTheme.spacing(2),
    textAlign: 'center',
    color: "green",
   // backgroundColor:'blue',
   // height: "100vh",
   height: "100%",
    //flexGrow: 1,
      // borderRight: "3px solid #5186E7",
       //margin:"75px 0px",
       borderRight: "3px solid green",
  },
  root2: {
      //width: 240,
     // backgroundColor: 'red',
      display: "flex",
      flexDirection: "column",
     // height: "100%",
     height: "100vh",
      padding: defaultTheme.spacing(2),
    },
    divider: {
        margin: defaultTheme.spacing(2, 2),
        height: 2,
        color: "#5186E7",
        //backgroundColor: "#5186E7"
        backgroundColor: "green"
      },
      root3: {
        marginTop:60,
        paddingTop:20,
        //width: '100%',
        //maxWidth: 360,
       // margin:"75px 0px",
        color:'green'
        //backgroundColor: 'blue',
      },
      tableroot: {
        width: '100%',
      },
      tablecontainer: {
        maxHeight: 440,
      },
      fab:{   
      
        marginLeft:10,
        //backgroundColor: green[500],
        color: "white",
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[600],
        },
      }
}));


function App(props) {

  const { children } = props;
  const { className, ...rest } = props;

  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <h1>Welcome to Kenla</h1>
    //     {/* <a
    //       className="App-link"n
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
<div>
  
  
<Topbar/>

<div className={classes.root1}>
      <Grid container spacing={0}>
       
        <Grid container item xs={4}>
                    <Grid item xs={6} spacing={0}>
                    <Paper className={classes.paper}>

                    <div {...rest} className={clsx(classes.root2, className)}>
              <Profile />
              <Divider className={classes.divider} />
              <SidebarNav />
            </div>
                    
                    </Paper>
                    {/* <div {...rest} className={clsx(classes.root2, className)}>
              <Profile />
              <Divider className={classes.divider} />
              <SidebarNav />
            </div> */}
                      </Grid>
                      <Grid item xs={6} spacing={0}>

                      <Paper className={classes.paper}>

{/* <div {...rest} className={clsx(classes.root2, className)}>
<Profile />
<Divider className={classes.divider} />
<SidebarNav />
</div> */}
 <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" style={{color:'green',fontSize:25}}>
          Event List 
          <Fab size="small" className={classes.fab}>
                                        <AddIcon />
                                    </Fab>
        </ListSubheader>
      }
      className={classes.root3}
    >
      <Divider style={{ height: 0.5,
        color: "#5186E7",}}/>
      <ListItem button>
        <ListItemText primary="Thanks giving dinner" secondary="28/11/2020 "/>
       
      </ListItem>
      <Divider style={{ height: 0.5,
        color: "#5186E7",}}/>
      <ListItem button>
        <ListItemText primary="Chritsmas" secondary="28/11/2020 " />
       
      </ListItem>
      <Divider style={{ height: 0.5,
        color: "#5186E7",}}/>
      <ListItem button>
        <ListItemText primary="New Year" secondary="28/11/2020 "    />
      
      </ListItem>
      <Divider style={{ height: 0.5,
        color: "#5186E7",}}/>
     
    </List>
</Paper>
      
          </Grid>
        </Grid>
        <Grid container  item xs={8} style={{margin:"75px 0px",}} >

        <Grid  item xs={12} style={{display:'flex',flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Typography style={{fontSize:25}}>
          Thanksgiving Dinner
          </Typography>
        
         
       
        </Grid>
        
        <Grid  item xs={12} style={{paddingLeft:10,paddingRight:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
         <Typography style={{fontSize:25,}}>
          27/11/2020
          </Typography>
          <Typography style={{fontSize:25,}}>
          123 ABC Street,San Jose, CA
          </Typography>

         </Grid>
         {/* <Grid  item xs={12} style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
         <Typography style={{}}>
         
          </Typography>
          <Button style={{height:20,width:200,backgroundColor:'green'}}>
           See Guidelines
          </Button>

         </Grid> */}
        <Grid  item xs={12} style={{}}>
        <Typography style={{fontSize:20,padding:10}}>
          Participants 
        
          {/* <AddCircleIcon  style={{color:'green',marginLeft:10}}/> */}
                            
                                <Fab size="small" className={classes.fab}>
                                        <AddIcon />
                                    </Fab>
          </Typography> 
        <Paper className={classes.tableroot}>
        
      <TableContainer className={classes.tablecontainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth  ,color:"green",fontSize:20 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
       
        </Grid>
          
        </Grid>
        
      </Grid>
    </div>

    {/* <main>
      {children}
    </main> */}
  </div>

  );
}


App.propTypes = {
  children: PropTypes.node
};
export default App;
