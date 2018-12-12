import * as React from 'react';
import classnames from 'classnames';
import './chart.layout.scss';
import { ChartBody } from './Chart.layout.style';
const ResizeObserver = require('resize-observer-polyfill');

export interface ChartLayoutState {
  height: string;
}
class ChartLayout extends React.Component<{}, ChartLayoutState> {

  constructor(props: any) {
    super(props);
    this.state = {
      height: (window.innerHeight - 50) + 'px'
    };
    const ro = new ResizeObserver((entries: any, observer: any) => {
      for (const entry of entries) {
        const { left, top, width, height } = entry.contentRect;
        // console.log('Element:', entry.target);
        // console.log(`Element's size: ${width}px x ${height}px`);
        // console.log(`Element's paddings: ${top}px ; ${left}px`);
        this.setState({
          height: (window.innerHeight - 50) + 'px'
        })
      }
    });
    ro.observe(document.body);
  }

  render() {
    return (
      <div className={classnames('chart-layout', {'main': true})}>
        <div className="header">header</div>
        <ChartBody className="body" height={this.state.height}>
          <div className="sidebar-1">side-1</div>
          <div className="sidebar-2">side-2</div>
          <div className="content">content</div>
        </ChartBody>
      </div>
    );
  }
}

export default ChartLayout;