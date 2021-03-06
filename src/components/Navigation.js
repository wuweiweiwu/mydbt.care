import React from 'react';
import styled from '@emotion/styled';
import { withRouter, Link } from 'react-router-dom';
import { withFirebase } from '../context';
import { compose } from 'recompose';
import * as ROUTES from '../routes';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.hasAuth ? 'auto 1fr auto auto' : 'auto 1fr auto'};
  grid-template-rows: auto;
  grid-template-areas: ${props =>
    props.hasAuth ? "'title . home logout'" : "'title . login'"};
  align-items: center;
  justify-items: center;
  z-index: 3001;
  grid-column-gap: 32px;
  padding: 10px 16px;
`;

const Title = styled.a`
  color: white;
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  grid-area: title;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 16px;
  color: white;
  text-decoration: none;
  grid-area: ${props => props.area};
`;

const Button = styled.button`
  background-color: white;
  border-radius: 3px;
  height: 35px;
  width: 70px;
  color: blue;
  text-decoration: none;
  line-height: 35px;
  text-align: center;
  grid-area: ${props => props.area};
  font-size: 16px;
  line-height: 16px;

  &:hover {
    transition: all 0.2s ease-in 0s;
    box-shadow: rgb(221, 217, 255) 0px 0px 16px;
  }
`;

const LogoutButton = compose(
  withRouter,
  withFirebase
)(({ firebase, history }) => (
  <Button
    onClick={() => {
      firebase.doSignOut();
      history.push(ROUTES.LANDING);
    }}
    area="logout"
  >
    Logout
  </Button>
));

const LoginButton = compose(withRouter)(({ history }) => (
  <Button
    onClick={() => {
      history.push(ROUTES.LOGIN);
    }}
    area="login"
  >
    Login
  </Button>
));

export default class Navigation extends React.Component {
  render() {
    const { hasAuth } = this.props;

    return (
      <Container hasAuth={hasAuth}>
        <Title href="/">MyDBT.care</Title>
        {!hasAuth ? (
          <LoginButton />
        ) : (
          <React.Fragment>
            <StyledLink to="/home" area="home">
              Home
            </StyledLink>
            <LogoutButton />
          </React.Fragment>
        )}
      </Container>
    );
  }
}
