import React from "react";
import { Popconfirm, message, Button, Row, Col, Divider } from "antd";
import { generateApiKey, getApiKey } from "./services";

function confirm(e) {
  message.success("Click on Yes");
  generateApiKey()
    .json(response => {
      this.setState({
        apiKey: response.api_key
      });
    })
    .catch(() => {});
}

class Developer extends React.Component {
  state = {
    apiKey: ""
  };

  componentDidMount() {
    getApiKey()
      .json(response => {
        console.log("response: ", response);
        this.setState({
          apiKey: response.api_key
        });
      })
      .catch(() => {});
  }

  render() {
    return (
      <div>
        <div>
          <span>
            {this.state.apiKey === ""
              ? "No API Key Generated"
              : this.state.apiKey}
          </span>
          <Divider type="vertical" />
          <Popconfirm
            title="Are you sure delete this generate a new key?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" size="small">
              Generate API Key
            </Button>
          </Popconfirm>
        </div>
        <Divider />
        <div>Show API Documentation</div>
      </div>
    );
  }
}

export default Developer;
