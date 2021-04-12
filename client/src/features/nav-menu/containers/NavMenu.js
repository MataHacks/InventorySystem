import React from 'react';
import {AppBar, Button, Grid, Hidden, Toolbar, Typography} from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import ExampleIcon from "../components/ExampleIcon";
import ThemeToggle from "../../theme/components/ThemeToggle";

const NavMenu = () => {
    return (
      <AppBar position='static' color='transparent' elevation={ 0 } >
          <Toolbar >
              <Grid container justify='space-between'>

                  <Hidden smUp>
                      <Grid item>
                          <ThemeToggle />
                      </Grid>
                      <Grid item>
                          <ExampleIcon />
                      </Grid>
                  </Hidden>

                  <Hidden xsDown>
                      <Grid item>
                          <ExampleIcon />
                      </Grid>
                      <Grid item>
                          <ThemeToggle />
                      </Grid>
                  </Hidden>

              </Grid>
          </Toolbar>
      </AppBar>
    )
}

export default NavMenu
