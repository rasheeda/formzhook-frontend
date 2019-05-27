import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Button } from 'antd';

function FormzCard(props) {
  const { classes } = props;
  
  return (
    <div>
        <Link to={'/formz/' + props.uniqueId + '/data'}>
            <Button type="primary">View Data</Button>
        </Link>
        </div>
  );
}

export default FormzCard;
