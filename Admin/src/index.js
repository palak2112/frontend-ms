import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './i18n.js';
ReactDOM.render(
  <div>
  <ToastContainer />
  <ChakraProvider theme={theme}>
      <React.StrictMode>
        <Suspense fallback="Loading...">
      <HashRouter>
        <Switch>
          <Route path={`/auth`} component={AuthLayout} />
          <Route path={`/admin`} component={AdminLayout} />
          <Route path={`/rtl`} component={RTLLayout} />
          <Redirect from='/' to='/admin' />
        </Switch>
          </HashRouter>
          </Suspense>
    </React.StrictMode>
  </ChakraProvider>
  </div>,
  document.getElementById("root")
);
