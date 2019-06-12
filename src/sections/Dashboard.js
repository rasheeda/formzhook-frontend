import React from "react";
import { Row, Col } from "antd";
import "./dashboard.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line
} from "recharts";
import {getFormDataCount, getFormDataDateCount} from "./dashboard_services";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formzDataCount: {},
            formzDataDateCount: {}
        }
    }

  componentDidMount() {

    getFormDataCount("dummyUserAuth")
    .json(response => {
      this.setState({
        formzDataCount: response
      });

      console.log("formzDataCount: " + JSON.stringify(this.state.formzDataCount));
    })
    .catch(() => {
    });

    getFormDataDateCount("dummyAuth")
    .json(response => {
        this.setState({
            formzDataDateCount: response
        })
    })
  }

  render() {
    return (
      <>
        <div className="dashboard-value-content">
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div className="dashboard-value-content-box">
                <div className="dashboard-value-content-data formz-count">
                  20
                </div>
                <div className="dashboard-value-content-title">Total Formz</div>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="dashboard-value-content-box">
                <div className="dashboard-value-content-data formz-data-count">
                  8
                </div>
                <div className="dashboard-value-content-title">
                  Total Formz Data
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="dashboard-value-content-box">
                <div className="dashboard-value-content-data formz-something-count">
                  57
                </div>
                <div className="dashboard-value-content-title">
                  Total Something
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="dashboard-graph-content">
          <Row gutter={16}>
            <Col className="gutter-row" span={10}>
              <div className="formz-data-count-period">
                <BarChart
                  width={500}
                  height={300}
                  data={this.state.formzDataCount}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="form_name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="form_data_count" fill="#8884d8" />
                </BarChart>
              </div>
            </Col>
            <Col className="gutter-row" span={14}>
              <div className="formz-data-count-graph">
                <LineChart
                  width={600}
                  height={300}
                  data={this.state.formzDataDateCount}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
