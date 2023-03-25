import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const getIntroOfPage = (label) => {
  if (label === 'Feb') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

class Chart extends Component {
  state = {
    data: {},
    janCount: 0,
    febCount: 0,
    marCount: 0,
    aprCount: 0,
    mayCount: 0,
    junCount: 0,
    julCount: 0,
    ogtCount: 0,
    sepCount: 0,
    octCount: 0,
    novCount: 0,
    decCount: 0
  }
  componentDidMount() {
    let volunteers = [];
    for (let i = 0; i < 3; i++) {
      let volunteer = { time: new Date() };
      volunteers.push(volunteer);
    }
    volunteers.forEach(element => {
      const month = element.time.getMonth();
      { console.log(month) }
      switch (month) {
        case 0: this.setState({ janCount: this.state.janCount++ });
          break;
        case 1: this.setState({ febCount: this.state.febCount++ });
          break;
        case 2: this.setState({ marCount: this.state.marCount++ });
          break;
        case 3: this.setState({ aprCount: this.state.aprCount++ });
          break;
        case 4: this.setState({ mayCount: this.state.mayCount++ });
          break;
        case 5: this.setState({ junCount: this.state.junCount++ });
          break;
        case 6: this.setState({ julCount: this.state.julCount++ });
          break;
        case 7: this.setState({ ogtCount: this.state.ogtCount++ });
          break;
        case 8: this.setState({ sepCount: this.state.sepCount++ });
          break;
        case 9: this.setState({ octCount: this.state.octCount++ });
          break;
        case 10: this.setState({ novCount: this.state.novCount++ });
          break;
        case 11: this.setState({ decCount: this.state.decCount++ });
          break;
      }
    })
    { console.log(this.state) }

    let data = [
      {
        name: 'Jan',
        No_Volunteers_Signup: this.state.janCount,
        amt: 2400,
      },
      {
        name: 'Feb',
        No_Volunteers_Signup: this.state.febCount,
        amt: 2210,
      },
      {
        name: 'Mar',
        No_Volunteers_Signup: this.state.marCount,
        amt: 2290,
      },
      {
        name: 'Apr',
        No_Volunteers_Signup: this.state.aprCount,
        amt: 2000,
      },
      {
        name: 'May',
        No_Volunteers_Signup: this.state.mayCount,
        amt: 2181,
      },
      {
        name: 'Jun',
        No_Volunteers_Signup: this.state.junCount,
        amt: 2500,
      },
      {
        name: 'Jul',
        No_Volunteers_Signup: this.state.julCount,
        amt: 2100,
      },
      {
        name: 'Ogt',
        No_Volunteers_Signup: this.state.ogtCount,
        amt: 2100,
      },
      {
        name: 'Sep',
        No_Volunteers_Signup: this.state.sepCount,
        amt: 2100,
      },
      {
        name: 'Oct',
        No_Volunteers_Signup: this.state.octCount,
        amt: 2100,
      },
      {
        name: 'Nov',
        No_Volunteers_Signup: this.state.novCount,
        amt: 2100,
      },
      {
        name: 'Dec',
        No_Volunteers_Signup: this.state.decCount,
        amt: 2100,
      },
    ];
    this.setState({ data })
  }

  render() {
    // { console.log(this.data) }
    return (
      < ResponsiveContainer width="100%" height="100%" >
        <BarChart
          width={500}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="No_Volunteers_Signup" barSize={40} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer >
    );
  }
}
export default Chart;





