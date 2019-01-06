import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: darkblue;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-template-rows: auto;
  grid-template-areas: 'title . signup login';
  align-items: center;
  justify-items: center;
  z-index: 3001;
  padding: 0px 16px;
  grid-column-gap: 32px;
  padding: 5px 16px;
`;

const Title = styled.a`
  color: white;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  grid-area: title;
`;

const SignUp = styled.a`
  color: white;
  margin: 0;
  font-size: 16px;
  text-decoration: none;
  grid-area: signup;
`;

const Login = styled.a`
  color: white;
  margin: 0;
  font-size: 16px;
  text-decoration: none;
  grid-area: login;
`;

export default class Navigation extends React.Component {
  render() {
    return (
      <Container>
        <Title href="/">MyDBT.care</Title>
        <SignUp href="/signup">Sign Up</SignUp>
        <Login href="/login">Login</Login>
      </Container>
    );
  }
}
