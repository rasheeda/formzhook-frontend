import React from "react";
import PropTypes from "prop-types";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import { DatePicker } from 'antd';


const styles = theme => ({
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
});

function Menu(props) {
  const { classes } = props;

  return (
    <Router>
      <Paper>
        <MenuList>
          <Link to="/">
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Dashboard"
              />
            </MenuItem>
          </Link>
          <Divider />
          <NavLink to="/formz">
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Formz"
              />
            </MenuItem>
          </NavLink>
          <Divider />
          <NavLink to="/developer">
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="API"
              />
            </MenuItem>
          </NavLink>
        </MenuList>
      </Paper>
    </Router>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
