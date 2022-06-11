import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    //   const style = {
    //     background : '#f58220',
    //     height: '30px',
    //     fontSize: '20px',

    // };

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar style={{
              background: '#f58220',
              height: '30px',
              fontSize: '20px',
              fontFamily: 'sans-serif'
            }} position='static' title="Enter User Details">Enter User Details</AppBar>
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your UID"
              label="UID"
              onChange={handleChange('UID')}
              defaultValue={values.UID}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              // color="primary"
              style={{fontFamily: 'sans-serif', backgroundColor: '#f58220', borderColor: 'orange', color: 'white', fontWeight: 'bold' }}
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;