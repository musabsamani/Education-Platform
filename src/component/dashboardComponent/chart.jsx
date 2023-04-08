import React, { Component } from 'react';
import ApexChart from './apexchart';

class Chart extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="col-xxl-8">
          <div className="card shadow h-100">

            {/* <!-- Card header --> */}
            <div className="card-header p-4 border-bottom">
              <h5 className="card-header-title">Chart</h5>
            </div>

            {/* <!-- Card body --> */}
            <div id="ChartPayout" min-height='315px'>
              <div className="card-body" style={{ position: 'relative' }}>
                {/* <!-- Apex chart --> */}
                <ApexChart
                  volunteers={this.props.volunteers}
                  students={this.props.students}
                  sessions={this.props.sessions} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Chart;
