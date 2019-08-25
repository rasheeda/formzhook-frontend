import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Icon, Button, Divider } from "antd";

const { Meta } = Card;

function FormzCard(props) {
  return (
    <div>
      <Col span={6} style={{ margin: 20 }}>
        <Card
          title={props.name}
          extra={
            <Link to={"/formz/" + props.uniqueId + "/data"}>
              <Button type="primary">View Data</Button>
            </Link>
          }
          bordered={true}
          actions={[<Icon type="edit" />, <Icon type="delete" />]}
        >
          <Meta title={"ID - " + props.uniqueId} />
          <br />
          <p> {props.description}</p>
          <p>Date Created: {props.dateCreated}</p>
        </Card>
      </Col>
    </div>
  );
}

export default FormzCard;
