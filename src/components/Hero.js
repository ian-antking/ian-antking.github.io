import React from 'react';
import styled from 'styled-components';
import image from '../assets/header-image.jpg';

const HeroImage = styled.div`
  background-image: linear-gradient(
      ${(props) => props.theme.shadow}80,
      ${(props) => props.theme.shadow}80
    ),
    url(${image});
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Hero = () => (
  <>
    <HeroImage />
  </>
);

export default Hero;
