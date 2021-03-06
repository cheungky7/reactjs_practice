import React, { Suspense, lazy } from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import RXJSTest from './pages/RXJSTEST/rxjstest';
// import GridLayout from './pages/GridLayout';
// import FlexLayout from './pages/FlexLayout';
const GridLayout = lazy(() => import('./pages/GridLayout'));
const FlexLayout = lazy(() => import('./pages/FlexLayout'));
const RXJSTest = lazy(() => import('./pages/RXJSTEST/rxjstest'));
const PureRXJS = lazy(() => import('./pages/PURERXJS/purerxjs'));


const drawerWidth = 150;

const styles = {

  root:{
    backgroundColor: 'blue',
    //backgroundColor: 'rgba(255,0,0,1)',
  },
  drawerInner: {
    // flexGrow: 1,
    width: `${drawerWidth}px`,
    flexGrow: 1,
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    display: 'flex',
    flexdirection: 'row',
   
  },
  appBar: {
    width: '100%',
    backgroundColor: 'rgba(255,0,0,1)',
  },
  appBarShift: {
   marginLeft: `${drawerWidth}px`,
   backgroundColor: 'rgba(255,0,0,1)',
    },
};

function Index() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

 

  class App extends React.Component {

    constructor(props) {
      super(props);
      this.state={open:false}

      this.handleDrawerIcon=this.handleDrawerIcon.bind(this);
    }

    handleDrawerIcon() {
     this.setState({open: !this.state.open});

    }


  render(){
    return (
      <Router style={styles.root}>
         <div >
        <AppBar position="static"  style={this.state.open?styles.appBarShift:styles.appBar} >
          <Toolbar>
            <IconButton style={styles.menuButton} color="inherit" aria-label="Menu" onClick={this.handleDrawerIcon}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          style={styles.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
        >
         <div style={styles.drawerInner}>
         <IconButton onClick={this.handleDrawerIcon}>
              <ChevronLeftIcon />
          </IconButton>
        <ul>
            <li>
              <Link style={styles.link} to="/">Home</Link>
            </li>
            <li> 
              <Link style={styles.link} to="/about/">About</Link>
            </li>
            <li>
              <Link style={styles.link} to="/users/">Users</Link>
            </li>
            <li>
              <Link style={styles.link} to="/Grid/">GridLayout</Link>
            </li>
            <li>
              <Link style={styles.link} to="/Flex/">FlexLayout</Link>
            </li>
            <li>
              <Link style={styles.link} to="/rxjs/">RXJS</Link>
            </li>
            <li>
              <Link style={styles.link} to="/purerxjs/">PURERXJS</Link>
            </li>
          </ul>
          </div>
        </Drawer>
        <div style={this.state.open?styles.appBarShift:styles.appBar} >
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/Grid/" component={GridLayout} />
          <Route path="/Flex/" component={FlexLayout} />
          <Route path="/rxjs/" component={RXJSTest} />
          <Route path="/purerxjs/" component={PureRXJS} />
        </Suspense>
        </div>
        </div>
      </Router>
    );
  }
}
  
  export default App;