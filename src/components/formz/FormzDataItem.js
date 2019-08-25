import React from "react";
import { Card, Col, Row } from "antd";
import "./FormzDataItem.css";
import ReactJson from "react-json-view";
import { JsonToTable } from "react-json-to-table";

const TABLE_COLUMNS = [];

const FormDataElement = ({
  data,
  createdAt,
  updatedAt,
  name,
  description,
  formId
}) => {
  return <table>{createTableRow(data)}</table>;
};

function createTableRow(data) {
  return Object.entries(data).map(([key, value], i) => (
    <tbody>{createTableBody(key, value, i)}</tbody>
  ));
}

function createTableBody(key, value, i) {
  return (
    <tr key={i}>
      <td align="right">{key}</td>
      <td align="right">{value}</td>
    </tr>
  );
}

const myJson = {
  "Student": { name: "Jack", email: "jack@xyz.com" },
  "Student id": 888,
  "Sponsors": [
    { name: "john", email: "john@@xyz.com" },
    { name: "jane", email: "jane@@xyz.com" }
  ]
};

const FormDataElementContainer = ({ item }) => {
  return (
    <div
      style={{ background: "#ECECEC", padding: "20px", marginBottom: "20px" }}
    >
      {console.log(item.data)}
      {console.log(myJson)}
      <Row gutter={16}>
        <Col span={12}>
          <Card title={item.name} bordered={true}>
            <JsonToTable json={item.data} />
          </Card>
        </Col>
        <Col span={12}>
          <ReactJson src={item.data} theme="monokai"/>
        </Col>
      </Row>
    </div>
  );
};

class FormzDataItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.results.map(item => (
          <FormDataElementContainer item={item} key={item.id}/>
        ))}
      </div>
    );
  }
}

export default FormzDataItem;
