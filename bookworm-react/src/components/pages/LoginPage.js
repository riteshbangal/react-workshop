import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Header, Image, Message, Divider } from 'semantic-ui-react';

import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {

  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="login-form">
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
        ` }
        </style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='left'>
                <Image src='./logo.png'/ >
                {' '}Log-in to your account
                <Divider horizontal/>
                <LoginForm submit={this.submit} />
              </Header>
              <Message>
                New to us? <Link to="/">Sign Up</Link>
              </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;