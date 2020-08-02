import React from 'react';
import PropTypes from 'prop-types';
import LazyHero from 'react-lazy-hero';
import styled, { withTheme } from 'styled-components';
import image from '../assets/header-image.jpg';

const HeroImage = styled(LazyHero)`
  width: 100vw;
  height: 91.5vh;
  overflow: hidden;
`;

const Hero = ({ theme }) => (
  <HeroImage
    color={theme.shadow}
    imageSrc={image}
    opacity={0.5}
    parallaxOffset={100}
  >
    <h1>Ian King</h1>
  </HeroImage>
);

Hero.propTypes = {
  theme: PropTypes.shape({
    shadow: PropTypes.string,
  }).isRequired,
}

export default withTheme(Hero);
