import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    center: {
        justifyContent: 'center',
    },
    transparent: {
        backgroundColor: 'transparent',
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
      <AppBar position="static"
              elevation={ 0 }
              className={ classes.transparent }
      >
          <Toolbar className={ classes.center }>
              <Typography variant="body2" color="textSecondary" display='inline'>© Some Footer Text</Typography>
          </Toolbar>
      </AppBar>
    )
}

export default Footer
