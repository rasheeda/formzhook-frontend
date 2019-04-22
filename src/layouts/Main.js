import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Menu from "./Menu";
import Typography from "@material-ui/core/Typography";
import Content from "./Content";
import { BrowserRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  Paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Header />
            </Grid>

            <Grid item xs={4}>
              <Menu />
            </Grid>
            
            <Grid item xs={8}>
              <Content />
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  This is the footer.
                </Typography>
                <Typography component="p">footer information</Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
