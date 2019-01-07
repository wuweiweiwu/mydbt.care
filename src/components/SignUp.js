import React from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../context';
import { compose } from 'recompose';
import * as ROUTES from '../routes';

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

const Wrapper = styled.div`
  padding: 20px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50vw;
  margin-top: 50px;
`;

const Input = styled.input`
  font-size: 16px;
  position: relative;
  z-index: 3;
  padding: 4px 20px;
  flex: 1 1 auto;
  margin: 10px 0;
  width: 50vw;
`;

const Submit = styled.button`
  background-color: white;
  border-radius: 3px;
  height: 35px;
  width: 100px;
  color: blue;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  display: block;
  margin-top: 30px;

  &:hover {
    transition: all 0.2s ease-in 0s;
    box-shadow: rgb(221, 217, 255) 0px 0px 16px;
  }

  &:disabled {
    box-shadow: unset;
    color: grey;
  }
`;

const Error = styled.div`
  color: white;
  font-size: 16px;
  margin-top: 30px;
`;

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '' || email === '';
    return (
      <Wrapper>
        <div>
          <Title>Sign Up</Title>
          <Form onSubmit={this.onSubmit}>
            <Input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <Input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <Input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Submit>

            {error && <Error>Error: {error.message}</Error>}
          </Form>
        </div>
      </Wrapper>
    );
  }
}

export default compose(
  withRouter,
  withFirebase
)(SignUp);
