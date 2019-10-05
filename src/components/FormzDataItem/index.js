import React from "react";
import { Card, Col, Row } from "antd";
import "./styles.css";
import ReactJson from "react-json-view";
import { JsonToTable } from "react-json-to-table";

const FormDataElementContainer = ({ item }) => {
  return (
    <div
      style={{ background: "#ECECEC", padding: "20px", marginBottom: "20px" }}
    >
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