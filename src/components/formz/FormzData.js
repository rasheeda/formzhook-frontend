import React from "react";
import { FORMZ_API_URL, STATUSES } from "../../constants";
import wretch from "wretch";
import FormzDataItem from "./FormzDataItem";
import {authHeader} from "../../models/authHeader";

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
      .query({
      })
      .get()
      .json(response => {
        console.log('results: ', response)
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
        Hello from formz data
        {this.state.FormzDataStatus === STATUSES.success && (
          <FormzDataItem results={this.state.FormzDataResults} key={this.state.FormzDataResults}/>
        )}
      </div>
    );
  }
}
