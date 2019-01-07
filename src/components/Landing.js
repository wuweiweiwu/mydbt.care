import React from 'react';
import styled from '@emotion/styled';

import diaryCard from '../assets/diary-card.jpg';

const Wrapper = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 80px;
  position: relative;
  height: calc(100vh - 38px);
`;

const Title = styled.div`
  color: white;
  font-size: 48px;
`;

const Description = styled.div`
  color: white;
  text-align: left;
  font-size: 18px;
  margin: 40px 0;
`;

const SignUp = styled.a`
  background-color: white;
  border-radius: 3px;
  height: 35px;
  width: 100px;
  color: blue;
  text-decoration: none;
  line-height: 35px;
  text-align: center;
  display: block;

  &:hover {
    transition: all 0.2s ease-in 0s;
    box-shadow: rgb(221, 217, 255) 0px 0px 16px;
  }
`;

const Info = styled.div`
  right: 15vw;
  position: relative;
  padding: 0 20px;

  @media (max-width: 1200px) {
    right: 0px;
  }
`;

const Image = styled.img`
  position: absolute;
  top: calc(50vh - 250px);
  left: calc(35vw + 400px);

  @media (max-width: 1200px) {
    display: none;
  }
`;

export default class Landing extends React.Component {
  render() {
    return (
      <Wrapper>
        <Info>
          <Title>An easier way to fill out diary cards.</Title>
          <Description>
            Filling out a diary card is often tedius and time consuming.
            <br />
            <br />
            However, they can be an effective way to learn about yourself and
            track your progress.
            <br />
            <br />
            MyDBT.care aims to make filling out diary cards a fast and succint
            process.
          </Description>
          <SignUp href="/signup">Sign Up</SignUp>
        </Info>
        <Image src={diaryCard} height={500} width={400} alt="Diary Card" />
      </Wrapper>
    );
  }
}
