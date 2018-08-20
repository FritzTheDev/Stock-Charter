import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class Chart extends Component {
    constructor([props]) {
        super(props);
        this.state = { data: { "2017-05-13": 2, "2017-05-14": 5}};
    }
    render() {
        return(
            <LineChart data={this.state.data} />
        )
    }
}