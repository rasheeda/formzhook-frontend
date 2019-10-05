import React from "react";
import { Row, Col } from "antd";
import "./styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line
} from "recharts";
import { getFormDataCount, getFormDataDateCount, getTotalFormz, getTotalFormzData } from "../../services/s_dashboard";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formzDataCount: {},
      formzDataDateCount: {},
      totalFormzCreated: '',
      totalFormzDataCreated: ''
    };
  }

  componentDidMount() {
    getFormDataCount()
      .json(response => {
        this.setState({
          formzDataCount: response
        });
      })
      .catch(() => {});

    getFormDataDateCount().json(response => {
      this.setState({
        formzDataDateCount: response
      });
    });

    getTotalFormz().json(response => {
      this.setState({
        totalFormzCreated: response
      });
    });

    getTotalFormzData().json(response => {
      this.setState({
        totalFormzDataCreated: response
      });
    });
  }

  render() {
    return (
      <>
        <div className="dashboard-value-content">
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div className="dashboard-value-content-box">
                <div className="dashboard-value-content-data formz-count">
                  {this.state.totalFormzCreated}
                </div>
                <div className="dashboard-value-content-title">Total Formz</div>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="dashboard-value-content-box">
                <div className="dashboard-value-content-data formz-data-count">
                  {this.state.totalFormzDataCreated}
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
                  <Line type="monotone" dataKey="count" stroke="#82ca9d" />
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
