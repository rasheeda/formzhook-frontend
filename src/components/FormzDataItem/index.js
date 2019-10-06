import React from "react";
import { Card, Col, Row, Divider } from "antd";
import "./styles.css";
import ReactJson from "react-json-view";
import { JsonToTable } from "react-json-to-table";

const FormDataElementContainer = ({ item }) => {
  return (
    <div
      style={{padding: "10px", marginBottom: "10px" }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <JsonToTable json={item.data} />
          </Card>
        </Col>
        <Col span={12}>
          <ReactJson src={item.data}/>
        </Col>
      </Row>
      <Divider />
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