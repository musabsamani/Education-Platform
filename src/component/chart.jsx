import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let janCount = 5;
let febCount = 3;
let marCount = 8;
let aprCount = 28;
let mayCount = 50;
let junCount = 6;
let julCount = 22;
let ogtCount = 9;
let sepCount = 35;
let octCount = 18;
let novCount = 42;
let decCount = 30;

// this.props.volunteers.forEach(e=> {
//   const month = e.time.getMonth();

//   switch (month) {
//     case 0: janCount++;
//       break;
//     case 1: febCount++;
//       break;
//     case 2: marCount++;
//       break;
//     case 3: aprCount++;
//       break;
//     case 4: mayCount++;
//       break;
//     case 5: junCount++;
//       break;
//     case 6: julCount++;
//       break;
//     case 7: ogtCount++;
//       break;
//     case 8: sepCount++;
//       break;
//     case 9: octCount++;
//       break;
//     case 10: novCount++;
//       break;
//     case 11: decCount++;
//       break;  
//   }
// });


const data = [
  {
    name: 'Jan',
    No_Volunteers_Signup: janCount,
    amt: 2400,
  },
  {
    name: 'Feb',
    No_Volunteers_Signup: febCount,
    amt: 2210,
  },
  {
    name: 'Mar',
    No_Volunteers_Signup: marCount,
    amt: 2290,
  },
  {
    name: 'Apr',
    No_Volunteers_Signup: aprCount,
    amt: 2000,
  },
  {
    name: 'May',
    No_Volunteers_Signup: mayCount,
    amt: 2181,
  },
  {
    name: 'Jun',
    No_Volunteers_Signup: junCount,
    amt: 2500,
  },
  {
    name: 'Jul',
    No_Volunteers_Signup: julCount,
    amt: 2100,
  },
  {
    name: 'Ogt',
    No_Volunteers_Signup: ogtCount,
    amt: 2100,
  },
  {
    name: 'Sep',
    No_Volunteers_Signup: sepCount,
    amt: 2100,
  },
  {
    name: 'Oct',
    No_Volunteers_Signup: octCount,
    amt: 2100,
  },
  {
    name: 'Nov',
    No_Volunteers_Signup: novCount,
    amt: 2100,
  },
  {
    name: 'Dec',
    No_Volunteers_Signup: decCount,
    amt: 2100,
  },
];

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
  state = {  } 
  render() { 
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
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
      </ResponsiveContainer>
    );
  }
}
export default Chart;





