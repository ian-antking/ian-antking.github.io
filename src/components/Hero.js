import React from 'react';
import styled from 'styled-components';
import image from '../assets/header-image.jpg';

const HeroImage = styled.div`
  background-image: linear-gradient(
      ${(props) => props.theme.shadow}80,
      ${(props) => props.theme.shadow}80
    ),
    url(${image});
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
`;

const Title = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.light};
  font-size: 5em;
`;

const SubTitle = styled.h2`
  margin: 0;
  font-size: 2em;
  color: ${(props) => props.theme.highLight};
`;

const TitleBox = styled.div`
  margin: 10vw;
`;

const Hero = () => (
  <>
    <HeroImage>
      <TitleBox>
        <Title>Ian King</Title>
        <SubTitle>
          Junior Software Engineer,
          <br />
          Coding Tutor and Maker
        </SubTitle>
      </TitleBox>
    </HeroImage>
  </>
);

export default Hero;
