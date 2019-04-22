import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    // margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
};

function SimpleCard(props) {
  const { classes } = props;
  
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.uniqueKey}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.createdAt}
        </Typography>
        <Typography component="p">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={'/formz/' + props.uniqueId + '/data'}>
            <Button variant="outlined" color="primary" className={classes.button}>
                View Data
            </Button>
        </Link>
        <IconButton className={classes.button} aria-label="Edit">
            <EditIcon />
        </IconButton>
        <IconButton className={classes.button} aria-label="Delete">
            <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
