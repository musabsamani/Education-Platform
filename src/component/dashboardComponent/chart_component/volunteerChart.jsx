import React, { Component } from 'react';
import Chart from "react-apexcharts";



class VolunteerChart extends Component {
    state = {

        options: {
            chart: {
                type: 'bar',
                height: 50
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '66%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                title: {
                    text: 'Volunteers'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " member"
                    }
                }
            }
        },
    }

    calc = () => {
        let janCount = 0
        let febCount = 0
        var marCount = 0
        var aprCount = 0
        var mayCount = 0
        let junCount = 0
        let julCount = 0
        let ogtCount = 0
        let sepCount = 0
        let octCount = 0
        let novCount = 0
        let decCount = 0

        this.props.volunteers.forEach(element => {
            const month = new Date(element.time).getMonth();
            switch (month) {
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
        })
        let series = [{
            name: 'Volunteer',
            data: [janCount, febCount, marCount, aprCount, mayCount, junCount, julCount, ogtCount, sepCount, octCount, novCount, decCount]
        }]

        return series;
    }
    render() {
        return (
            <>
                <Chart options={this.state.options} series={this.calc()} type="bar" />
            </>
        );
    }
}

export default VolunteerChart;

