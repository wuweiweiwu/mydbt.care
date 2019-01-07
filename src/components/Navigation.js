import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  grid-template-areas: 'title . login';
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
  &:hover {
    color: pink;
  }
`;

const Login = styled.a`
  color: white;
  margin: 0;
  font-size: 16px;
  text-decoration: none;
  grid-area: login;

  &:hover {
    color: pink;
  }
`;

export default class Navigation extends React.Component {
  render() {
    return (
      <Container>
        <Title href="/">MyDBT.care</Title>
        <Login href="/login">Login</Login>
      </Container>
    );
  }
}
