import React from "react";
import "./styles.css";
import EditableFormTable from "../FormzTable";
import { Modal, Button, Input, Icon } from "antd";
import { createForm } from "../../services/s_formz";

class Formz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      visible: false,
      name: "",
      description: ""
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });

    createForm(this.state.name, this.state.description)
      .json(response => {
        if (response.name === this.state.name) {
          this.setState({ loading: false, visible: false });
          setTimeout(function() {
            window.location.reload();
          }, 1000);
        }
      })
      .catch(() => {});
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleNameValueChange = e => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionValueChange = e => {
    this.setState({ description: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <Button
            icon="plus"
            type="primary"
            onClick={this.showModal}
            className="new-form-button"
          >
            New Form
          </Button>

          <Modal
            visible={this.state.visible}
            title="Create a new form"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={this.state.loading}
                onClick={this.handleOk}
              >
                Submit
              </Button>
            ]}
          >
            <p>
              <Input placeholder="Name" onChange={this.handleNameValueChange} />
            </p>
            <p>
              <Input
                placeholder="Description"
                onChange={this.handleDescriptionValueChange}
              />
            </p>
          </Modal>
        </div>
        <EditableFormTable />
      </div>
    );
  }
}

export default Formz;
