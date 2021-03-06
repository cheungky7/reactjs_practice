import React from 'react';
import Grid from '@material-ui/core/Grid';
import './GridLayout.css'
import Button from '@material-ui/core/Button';
//import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

const style = {
 // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  background: 'yellow',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

class GridLayout extends React.Component {
    render() {
      return (
        <div className="root1">
           <Grid container spacing={0}
             alignItems='center'
             direction= 'row'
             justify='center'
           >
            <Grid item xs={6} sm={6} align="center">
              <div className="GridInside"  >xs=6 sm=6</div>
            </Grid>
            <Grid item xs={6} sm={6} align="center" >
              <div className="GridInside" >
                <Button style={style}>inline-style</Button>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} align="center">
              <div className="GridInside" >xs=6 sm=6</div>
            </Grid>
            <Grid item xs={6} sm={6} align="center">
              <div className="GridInside" >xs=6 sm=6</div>
            </Grid>
            <Grid item xs={6} sm={6} align="left">
              param1
            </Grid>
            <Grid item xs={6} sm={6} align="right">
            {/*<TextField
              id="standard-number" 
              type="number"
              margin="normal"
            />*/}
             <InputBase  defaultValue="0" />
            </Grid>
           </Grid>
        </div>
      );
    }
  }


  export default GridLayout;