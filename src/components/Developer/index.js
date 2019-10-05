import React from "react";
import {
  Popconfirm,
  message,
  Button,
  Collapse,
  Table,
  Card,
  Col,
  Row
} from "antd";
import { generateApiKey, getApiKey } from "../../services/s_formz";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { defaultStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";

function confirm(e) {
  generateApiKey()
    .json(response => {
      message.success("API Key Successfully Generated");

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
    key: "api_key",
    render: key => (
      <SyntaxHighlighter language="http" style={defaultStyle}>
        {key}
      </SyntaxHighlighter>
    )
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
        this.setState({
          apiKey: response.api_key
        });

        localStorage.setItem("api_key", response.api_key);
      })
      .catch(() => {});
  }

  exampleFormDataRequest = "$num = data";

  render() {
    return (
      <div>
        <Table
          dataSource={apiKeyDataSource}
          columns={API_KEY_COLUMNS}
          pagination={false}
        />
        <div>
          <h3>API Documentation</h3>

          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Post Data to A Form" key="1">
              <p>To post data, the following parameters are required</p>
              <p>
                <strong>
                  <SyntaxHighlighter language="http" style={dracula}>
                    POST: https://formzhook.io/api/formz/[form_unique_id]/data
                  </SyntaxHighlighter>
                </strong>
              </p>
              <div style={{ background: "#fafafa", padding: "10px" }}>
                <Row>
                  <Col span={24}>
                    <Card title="Request Body" bordered={false}>
                      <p>
                        <strong>name</strong>: Name of the form data
                      </p>
                      <p>
                        <strong>description</strong>: Description of the form
                        data
                      </p>
                      <p>
                        <strong>data</strong>: JSON of the data
                      </p>
                      <p>
                        <strong>api_key</strong>: User generated api key from
                        the web app. You can define this as a hidden field in
                        your form
                      </p>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="Example Request" bordered={false}>
                      <SyntaxHighlighter language="http" style={dracula}>
                        {`
  curl --request POST \
  --url https://formzhook.io/api/formz/30f01227ecb64f5b92cc880ba2ed1a48/data \
  --data '{\n	"name": "Test new",\n	"description": "also not needed",\n	"data": {\n	  "userId": "1",\n	  "id": "1",\n	  "title": "delectus aut autem",\n	  "completed": "false"\n	},\n	"api_key":"1306c7c4874ca7737518047bc24b11ca3eea97d84d2e41435be15ce88d9c263e"\n}'
`}
                      </SyntaxHighlighter>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="Example Response" bordered={false}>
                      <SyntaxHighlighter language="json" style={atomOneDark}>
                        {`
{
  "name": "Test new",
  "description": "also not needed",
  "data": {
    "userId": "1",
    "id": "1",
    "title": "delectus aut autem",
    "completed": "false"
  },
  "api_key":"1306c7c4874ca7737518047bc24b11ca3eea97d84d2e41435be15ce88d9c263e"
}
`}
                      </SyntaxHighlighter>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Panel>
            <Panel header="Get Form Data" key="2">
              <p>
                <strong>
                  <SyntaxHighlighter language="http" style={dracula}>
                    GET: https://formzhook.io/api/formz/[form_unique_id]/data
                  </SyntaxHighlighter>
                </strong>
              </p>
              <SyntaxHighlighter language="json" style={dark}>
                {`
                    {
                      "name": "Test new",
                      "description": "also not needed",
                      "data": {
                        "userId": "1",
                        "id": "1",
                        "title": "delectus aut autem",
                        "completed": "false"
                      },
                      "api_key":"1306c7c4874ca7737518047bc24b11ca3eea97d84d2e41435be15ce88d9c263e"
                    }
                  `}
              </SyntaxHighlighter>
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Developer;
