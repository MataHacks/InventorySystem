import React from 'react';
import {Route, Switch} from 'react-router';

import { ThemeProvider } from "@material-ui/styles";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import {useSelector} from "react-redux";
import {darkTheme, lightTheme} from "./features/theme/theme";
import Layout from "./Layout";
import Home from "./pages/Home";
import UserLanding from "./pages/UserLanding";
import UserInventory from "./pages/UserInventory";
import AdminLanding from "./pages/AdminLanding";
import AdminInventory from "./pages/AdminInventory";


function App() {
    let themeStyle = useSelector((state) => state.theme.style )

    return (
      <ThemeProvider theme={ themeStyle === 'light' ? {...lightTheme} : {...darkTheme} }>
          <CssBaseline />
          <BrowserRouter >
              <Layout>
                  <Switch>
                    <Route exact path='/' render={ ( props ) => <Home { ...props } /> } />
                    <Route exact path='/user-landing-page' render={ ( props ) => <UserLanding { ...props } /> } />
                    <Route exact path='/user-inventory-page' render={ ( props ) => <UserInventory { ...props } /> } />
                    <Route exact path='/admin-landing-page' render={ ( props ) => <AdminLanding { ...props } /> } />
                    <Route exact path='/admin-inventory-page' render={ ( props ) => <AdminInventory { ...props } /> } />
                  </Switch>
            </Layout>
          </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;
