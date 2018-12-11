import * as React from 'react';
import { EuiHeader, EuiHeaderSection } from '@elastic/eui/lib/components/header';
import { JPage, JPageSideBar, JRow, JPageContent, JPageContentBody } from '../sdk';

export interface ChartLayoutState {
  widthData: string;
  widthConfig: string;
}
class ChartLayout extends React.Component<{}, ChartLayoutState> {

  constructor(props: any) {
    super(props);
    this.state = {
      widthData: '190px !important',
      widthConfig: '190px !important'
    };
  }

  toggleData = () => {
    if (this.state.widthData.indexOf('190px') >= 0) {
      this.setState({
        widthData: '20px !important'
      });
    } else {
      this.setState({
        widthData: '190px !important'
      });
    }
  };

  toggleConfig = () => {
    if (this.state.widthConfig.indexOf('190px') >= 0) {
      this.setState({
        widthConfig: '20px !important'
      });
    } else {
      this.setState({
        widthConfig: '190px !important'
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <EuiHeader>
          <EuiHeaderSection grow={false}>
          </EuiHeaderSection>
        </EuiHeader>
        <JPage>
          <JPageSideBar 
            onClick={this.toggleData} 
            width={this.state.widthData}
          >
            <JRow>
              menu 1
            </JRow>
          </JPageSideBar>
          <JPageSideBar
            onClick={this.toggleConfig}
            width={this.state.widthConfig}
          > 
            <JRow>
              menu 2
            </JRow>
          </JPageSideBar>
          <JPageContent>
            <JPageContentBody>
              page content body
            </JPageContentBody>
          </JPageContent>
        </JPage>
      </React.Fragment>
    );
  }
}

export default ChartLayout;