import React from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import classNames from 'classnames';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 150;

const styles = {

  drawerInner: {
    // flexGrow: 1,
    width: `${drawerWidth}px`,
    flexGrow: 1,
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
  },
  appBarShift: {
   marginLeft: `${drawerWidth}px`,
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
      <Router>
         <div>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
          </div>
        </Drawer>
        <div style={this.state.open?styles.appBarShift:styles.appBar} >
      
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
      
        </div>
        </div>
      </Router>
    );
  }
}
  
  export default App;