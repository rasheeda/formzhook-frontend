import React from "react";
import { Card, Col, Row } from "antd";
import "./FormzDataItem.css";
import MonacoEditor from "react-monaco-editor";
import ReactJson from "react-json-view";

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

const FormDataElementContainer = ({ item }) => {
  return (
    <div
      style={{ background: "#ECECEC", padding: "20px", marginBottom: "20px" }}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Card title={item.name} bordered={true}>
            {console.log("item data: " + `${item.data}`)}
            <FormDataElement
              data={item.data}
              createdAt={item.created_at}
              updatedAt={item.updated_at}
              name={item.name}
              description={item.description}
              formId={item.form_id}
              key={item.id}
            />
          </Card>
        </Col>
        <Col span={16}>
          <ReactJson src={item.data} theme="monokai" />
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
          <FormDataElementContainer item={item} />
        ))}
      </div>
    );
  }
}

export default FormzDataItem;

// this.state.formzData.map(form => (
//   <FormzTable
//     uniqueId={form.id}
//     name={form.name}
//     description={form.description}
//     dateCreated={form.created_at}
//     uniqueKey={"hhg78t8t87tf875"}
//     key={form.id}
//   />
// ))
