import React, { Component } from 'react';
import DropDown from './DropDown';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useTranslation } from "react-i18next";


export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {t} = useTranslation();

    const { values, handleChange } = this.props;
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
            }} position='static' title="Enter Address">Enter Address</AppBar>
            <TextField
              placeholder="Address Line 1"
              label="Address Line 1"
              onChange={handleChange('Address Line 1')}
              defaultValue={values.a1}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Address Line 2"
              label="Address Line 2"
              onChange={handleChange('Address Line 2')}
              defaultValue={values.a2}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="City"
              label="City"
              onChange={handleChange('City')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />

            <DropDown />

            <br />
            <TextField
              placeholder="Zip/Postal Code"
              label="Zip/Postal Code"
              onChange={handleChange('zip')}
              defaultValue={values.zip}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              // color="secondary"
              style={{ fontFamily: 'sans-serif', backgroundColor: '#f58220', borderColor: 'orange', color: 'white', fontWeight: 'bold', marginBottom: '10px' }}
              variant="contained"
              onClick={this.back}
            >{t("Back")}</Button>
            <br />

            <Button
              // color="primary"
              style={{ fontFamily: 'sans-serif', backgroundColor: '#f58220', borderColor: 'orange', color: 'white', fontWeight: 'bold' }}
              variant="contained"
              onClick={this.continue}
            >{t("Continue")}</Button>

          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
