import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {t} = useTranslation();

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>{t("Thank You For Your Submission")}</h1>
            <p>{t("You will get an email with further instructions.")}</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
