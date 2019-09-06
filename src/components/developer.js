import React from "react";
import { Popconfirm, message, Button, Collapse, Table } from "antd";
import { generateApiKey, getApiKey } from "./services";

function confirm(e) {
  generateApiKey()
    .json(response => {
      message.success("Key Generated");

      this.setState({
        apiKey: response.api_key
      });

      localStorage.setItem("api_key", response.api_key);

      window.location.reload();
    })
    .catch(() => {});
}

const API_KEY_COLUMNS = [
  {
    title: "API Key",
    dataIndex: "api_key",
    key: "api_key"
  },
  {
    title: "Action",
    dataIndex: "generate_btn",
    key: "generate_btn",
    render: generate_btn => (
      <Popconfirm
        title="Are you sure you want to generate a new key?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary" size="small">
          Generate API Key
        </Button>
      </Popconfirm>
    )
  }
];

const apiKeyDataSource = [
  {
    key: "1",
    api_key: localStorage.getItem("api_key")
  }
];

const { Panel } = Collapse;


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
        <Table dataSource={apiKeyDataSource} columns={API_KEY_COLUMNS} pagination={false} />
        <div>
          <h3>API Documentation</h3>
          
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Post Data to A Form" key="1">
              <p>To post data, the following parameters are required</p>
              <p></p>
              <p>
                GET{" "}
                <strong>
                  <i>https://formzhook.io/api/formz/$form_unique_id/data</i>
                </strong>
              </p>
            </Panel>
            <Panel header="Get Form Data" key="2">
              <p></p>
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Developer;
