import React from "react";
import PropTypes from "prop-types";
import Validator from "validator";

import { Form, Button, Segment } from 'semantic-ui-react';

import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {

  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "password can't be blank.";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Segment stacked padded>
          <Form.Field error={!!errors.email}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail address"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
           <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Button primary color='teal' fluid size='large'>Login</Button>
        </Segment>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;