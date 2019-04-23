import React from "react";
import { FORMZ_API_URL, STATUSES } from "../constants";
import wretch from "wretch";
import FormzDataItem from "./FormzDataItem";

export default class FormzData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FormzDataResults: [],
      FormzDataStatus: STATUSES.idle
    };
  }

  componentDidMount() {
    wretch(`${FORMZ_API_URL}/${this.props.match.params.id}/data`)
      .headers({
        "Access-Control-Allow-Origin": "*",
        Origin: "http://127.0.0.1:5000",
        crossDomain: true
      })
      .query({
        // TODO: post the user info here user auth
      })
      .get()
      .json(response => {
        this.setState({
          FormzDataResults: response,
          FormzDataStatus: STATUSES.success
        });

        // console.log(
        //   "formzDataResults: " + JSON.stringify(this.state.FormzDataResults)
        // );
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
          <FormzDataItem results={this.state.FormzDataResults} />
        )}
      </div>
    );
  }
}
