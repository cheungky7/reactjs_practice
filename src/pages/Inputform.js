import React from 'react';
import Grid from '@material-ui/core/Grid';
import './InputForm.css'
import Paper from '@material-ui/core/Paper';

class InputForm extends React.Component {
    render() {
      return (
        <div className="root1">
           <Grid container spacing={0}>
            <Grid item xs={6} sm={6}>
              <div className="Paper1">xs=6 sm=6</div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="Paper1">xs=6 sm=6</div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="Paper1">xs=6 sm=6</div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="Paper1">xs=6 sm=6</div>
            </Grid>
           </Grid>
        </div>
      );
    }
  }


  export default InputForm;