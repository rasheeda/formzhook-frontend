import React from "react";
import { FORMZ_API_URL, STATUSES } from "../../utils/u_constants";
import wretch from "wretch";
import FormzDataItem from "../FormzDataItem";
import { authHeader } from "../../utils/u_authHeader";
import { Spin } from "antd";

export default class FormzData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FormzDataResults: [],
      FormzDataStatus: STATUSES.idle
    };
  }

  componentDidMount() {
    wretch(`${FORMZ_API_URL}/${this.props.match.params.unique_id}/app/data`)
      .headers(authHeader())
      .query({})
      .get()
      .json(response => {
        this.setState({
          FormzDataResults: response,
          FormzDataStatus: STATUSES.success
        });
      })
      .catch(() => {
        this.setState({
          FormzDataStatus: STATUSES.error
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.FormzDataStatus === STATUSES.success && (
          <FormzDataItem
            results={this.state.FormzDataResults}
            key={this.state.FormzDataResults}
          />
        )}
        {this.state.FormzDataStatus === STATUSES.idle && <Spin size="large"/>}
      </div>
    );
  }
}
