import React from "react";
import "antd/dist/antd.css";
import "./FormzTable.css";
import {
  Table,
  Input,
  InputNumber,
  Form,
  Button,
  Divider,
  Tag,
  Popconfirm,
  Alert
} from "antd";
import { STATUSES } from "../../constants";
import { Link } from "react-router-dom";
import {
  loadForm,
  updateForm,
  deleteForm
} from "./services";

const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingKey: "",
      formzData: {},
      formzStatus: STATUSES.idle,
      alertTitle: "",
      alert: false,
      alertType: "",
      formDataCount: 0
    };

    this.columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        editable: true
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        editable: true
      },
      {
        title: "ID",
        dataIndex: "unique_id",
        key: "unique_id",
        editable: false
      },
      {
        title: "Date Created",
        dataIndex: "created_at",
        key: "created_at",
        editable: false
      },
      {
        title: "",
        dataIndex: "data_items_count",
        key: "data_items_count",
        render: (text, record) => (
          <span>
            <Tag color="green">{text} data items</Tag>
            <Divider type="vertical" />
            <Link to={"/formz/" + record.unique_id + "/data"}>
              <Button type="primary">View Data</Button>
            </Link>
          </span>
        ),
        width: 250,
        editable: false
      },
      {
        title: "",
        key: "action",
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    href="javascript:;"
                    onClick={() => this.save(form, record.id)}
                    style={{ marginRight: 8 }}
                  >
                    Save
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm
                title="Sure to cancel?"
                onConfirm={() => this.cancel(record.id)}
              >
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <span>
              <a
                disabled={editingKey !== ""}
                onClick={() => this.edit(record.id)}
              >
                Edit
              </a>
              <Divider type="vertical" />
              <EditableContext.Consumer>
                {form => (
                  <Popconfirm
                    title="Are you sure you want to delete this form?"
                    onConfirm={() => this.delete(form, record.id)}
                  >
                    <a>Delete</a>
                  </Popconfirm>
                )}
              </EditableContext.Consumer>
            </span>
          );
        },
        editable: false
      }
    ];
  }

  componentWillMount() {
    loadForm()
      .json(response => {
        this.setState({
          formzData: response,
          formzStatus: STATUSES.success
        });

        console.log("formzData: " + JSON.stringify(this.state.formzData));
      })
      .catch(() => {
        this.setState({
          formzStatus: STATUSES.error
        });
      });
  }

  isEditing = record => record.id === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.formzData];
      const index = newData.findIndex(item => key === item.id);
      if (index > -1) {
        updateForm(key, row);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({
          formzData: newData,
          editingKey: "",
          alert: true,
          alertTitle: "Form updated successfully",
          alertType: "success"
        });
      } else {
        newData.push(row);
        this.setState({
          formzData: newData,
          editingKey: "",
          alert: true,
          alertTitle: "Unable to update form. Please try again.",
          alertType: "error"
        });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  delete(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.formzData];
      const index = newData.findIndex(item => key === item.id);
      if (index > -1) {
        deleteForm(key);
        const item = newData[index];
        newData.splice(index, 1);
        this.setState({
          formzData: newData,
          editingKey: "",
          alert: true,
          alertTitle: "Form deleted successfully",
          alertType: "success"
        });
      } else {
        newData.push(row);
        this.setState({
          formzData: newData,
          editingKey: "",
          alert: true,
          alertTitle: "Unable to delete form. Please try again.",
          alertType: "error"
        });
      }
    });
  }

  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          // inputType: col.dataIndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      <>
        {this.state.alert === true && (
          <p>
            <Alert
              message={this.state.alertTitle}
              type={this.state.alertType}
              showIcon
              closeText="Close"
            />
          </p>
        )}
        {this.state.formzStatus === STATUSES.success && (
          // <Table columns={columns} dataSource={this.state.formzData} />
          <EditableContext.Provider value={this.props.form}>
            <Table
              components={components}
              bordered
              dataSource={this.state.formzData}
              columns={columns}
              rowClassName="editable-row"
              pagination={{
                onChange: this.cancel
              }}
            />
          </EditableContext.Provider>
        )}
      </>
    );
  }
}

const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable;
