import * as React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Form } from 'react-final-form';
import { EuiButton } from '@elastic/eui';
import EInput from '../../client/sdk/forms/eui-final-input';
import { JFlexItem, JFlexGroup } from '../../client/sdk/styles/eui-flexgroup.style';
import { JRow, JPage, JPageBody, JPageContent, JPageContentHeader, JTitle, JPageContentBody } from '../../client/sdk';

export interface LoginProps {
  history: any;
}

export interface LoginState {
  error: string;
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onLogin = ({ email, password }) => {
    if (!email || !password) {
      this.setState({ error: 'Please input email and password both' });
      return;
    }
    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  }

  makeForm = ({ handleSubmit, submitting, pristine }) => {
    return (
      <form onSubmit={handleSubmit}>
        <JFlexGroup width="500px" direction="row" gutterSize="s">
          <JFlexItem><EInput name="email" type="email" placeholder="Email" /></JFlexItem>
          <JFlexItem><EInput name="password" type="password" placeholder="Passowrd" /></JFlexItem>
          <JFlexItem width="100px"><EuiButton type="submit" disabled={submitting || pristine}>Login</EuiButton></JFlexItem>
        </JFlexGroup>
      </form>
    );
  };

  public render() {
    return (
      <JPage>
        <JPageBody padding="50px 0 0 0">
          <JPageContent verticalPosition="center" horizontalPosition="center">
            <JPageContentHeader>
              <JTitle textalign="center"><h1>Chart Recommnedation Service</h1></JTitle>
            </JPageContentHeader>
            <JPageContentBody>
              <JRow justify="center"><img style={{width:'400px', height:'200px'}} src="./images/data2vis.png" /></JRow>
              <JRow>{this.state.error ? <p>{this.state.error} </p> : undefined}</JRow>
              <JRow><Form onSubmit={this.onLogin} render={this.makeForm} /></JRow>
              <JRow padding="20px 5px"><Link to="/signup">Have a account?</Link></JRow >
            </JPageContentBody>
          </JPageContent>
        </JPageBody>
      </JPage>
    );
  }
}
