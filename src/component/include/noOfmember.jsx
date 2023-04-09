import React from 'react';

const Nofmember = (props) => {
  let janCount = 60
  let febCount = 45
  let marCount = 0
  let aprCount = 0
  let mayCount = 7
  let junCount = 0
  let julCount = 0
  let ogtCount = 200
  let sepCount = 2
  let octCount = 9
  let novCount = 100
  let decCount = 5
  console.log(props.month)
  switch (props.month) {
    case 0: janCount++;
      break;
    case 1: febCount++;
      break;
    case 2: marCount++;
      break;
    case 3: aprCount++;
      break;
    case 4: mayCount++;
      break;
    case 5: junCount++;
      break;
    case 6: julCount++;
      break;
    case 7: ogtCount++;
      break;
    case 8: sepCount++;
      break;
    case 9: octCount++;
      break;
    case 10: novCount++;
      break;
    case 11: decCount++;
      break;
  }


  return janCount, febCount, marCount, aprCount, mayCount, junCount, julCount, ogtCount, sepCount, octCount, novCount, decCount;
}

export default Nofmember;
