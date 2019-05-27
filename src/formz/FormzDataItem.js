import React from "react";
import PropTypes from "prop-types";
import { Table, Divider, Tag } from 'antd';


const TABLE_COLUMNS = [];

const FormDataElement = ({
  data,
  createdAt,
  updatedAt,
  name,
  description,
  formId
}) => {
  return (
    <div>
      
        <h2>{name}</h2>
        <p>{description}</p>

        <table>
            {createTableRow(data)}
        </table>
      <Divider />
    </div>
  );
};

function createTableRow(data) {
  return Object.entries(data).map(([key, value], i) => (
    <tr key={i}>
      <td align="right">{key}</td>
      <td align="right">{value}</td>
    </tr>
  ));
}

class FormzDataItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.results.map(item => (
          <FormDataElement
            data={item.data}
            createdAt={item.created_at}
            updatedAt={item.updated_at}
            name={item.name}
            description={item.description}
            formId={item.form_id}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default FormzDataItem;
