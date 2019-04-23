import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ReactTable from "react-table";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  table: {
    minWidth: 700
  }
});

const TABLE_COLUMNS = [];

const FormDataElement = ({
  data,
  createdAt,
  updatedAt,
  name,
  description,
  formId,
  classes
}) => {
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography component="p">{description}</Typography>

        <Table className={classes.table}>
          <TableBody>
            {createTableRow(classes, data)}
          </TableBody>
        </Table>
      </Paper>
      <Divider />
    </div>
  );
};

function createTableRow(classes, data) {
  return Object.entries(data).map(([key, value], i) => (
    <TableRow className={classes.tableRow} key={i}>
      <TableCell align="right">{key}</TableCell>
      <TableCell align="right">{value}</TableCell>
    </TableRow>
  ));
}

class FormzDataItem extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.props.results.map(item => (
          <FormDataElement
            data={item.data}
            createdAt={item.created_at}
            updatedAt={item.updated_at}
            name={item.name}
            description={item.description}
            formId={item.form_id}
            classes={classes}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

FormzDataItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormzDataItem);
