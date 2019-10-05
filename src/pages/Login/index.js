import React from "react";
import { Form, Input, Alert, Button } from "antd";
import { login } from "../../services/s_auth";
import auth from "../../utils/u_auth";
import { Link } from "react-router-dom";

class UserLogin extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    isWrongLogin: false
  };

  componentDidMount() {
    if (auth.isAuthenticated()) {
      this.props.history.push("/");
    }
  }

  handleSubmit = e => {
    this.setState({ isWrongLogin: false });
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, data) => {
      if (!err) {
        const form = this.props.form;
        login(form.getFieldValue("email"), form.getFieldValue("password"))
          .json(response => {
            auth.login(() => {
              auth.setRefreshToken(response.refresh_token);
              auth.setAccessToken(response.access_token);
              window.location.reload();
            });
          })
          .catch(() => {
            this.setState({ isWrongLogin: true });
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 6,
          offset: 8
        }
      }
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        {this.state.isWrongLogin && (
          <Alert
            message="Error"
            description="Wrong email or password. Please try again."
            type="error"
            showIcon
          />
        )}
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          {" "}<Link to="/register">Register</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "login" })(UserLogin);
