import React, {Component} from 'react';

class ArticlesChart extends Component {
  constructor(props) {
    super(props);

    this.chart = null;

    this.setChartRef = element => {
      this.chart = element;
    };
  }

  componentDidMount() {
    // d3 works with this.refs.chart
  }

  componentWillReceiveProps() {
    // update chart for new articles
  }

  render() {
    return (
      <div ref={this.setChartRef} />
    );
  }
}

export default ArticlesChart;
