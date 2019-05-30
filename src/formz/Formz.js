import React from "react";
import wretch from "wretch";
import { Link } from "react-router-dom";
import { FORMZ_API_URL, STATUSES } from "../constants";
import { Card, Col, Icon, Button, Divider, Table, Tag } from "antd";
import './Form.css';
import EditableFormTable from './FormzTable';

class Formz extends React.Component {
  render() {
    return (
      <div>
        <EditableFormTable />
      </div>
    );
  }
}

export default Formz;
