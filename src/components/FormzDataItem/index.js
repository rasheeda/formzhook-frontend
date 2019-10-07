import React from "react";
import { Card, Col, Row } from "antd";
import "./styles.scss";
import ReactJson from "react-json-view";
import { JsonToTable } from "react-json-to-table";

const FormDataElementContainer = ({ item }) => {
  return (
    <div className="data-row">
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <JsonToTable json={item.data} />
          </Card>
        </Col>
        <Col span={12}>
          <ReactJson src={item.data} />
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
          <FormDataElementContainer item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default FormzDataItem;
