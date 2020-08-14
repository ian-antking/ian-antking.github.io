import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import devices from '../styles/devices'

const HeroImage = styled.div`
  background-image: linear-gradient(
      ${(props) => `${props.theme.shadow}${props.image ? '80' : 'FF'}`},
      ${(props) => `${props.theme.shadow}${props.image ? '80' : 'FF'}`}
    ),
    url(${(props) => props.image});
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${devices.mobileL} {
    align-items: flex-end;
    justify-content: center;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 ${(props) => props.angle}%);
`;

const Title = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.light};
  font-size: 4em;
`;

const SubTitle = styled.h2`
  margin: 0;
  font-size: 2em;
  color: ${(props) => props.theme.highLight};
`;

const TitleBox = styled.div`
  @media ${devices.mobileL} {
    margin: 10vw;
  }
`;

const Hero = ({ title, subtitle, image, angle }) => {
  const lines = subtitle.split('\\n');
  return (
    <>
      <HeroImage data-testid="hero-image" image={image} angle={angle}>
        <TitleBox>
          <Title>{title}</Title>
          {lines.map((line) => {
            return <SubTitle key={line}>{line}</SubTitle>;
          })}
        </TitleBox>
      </HeroImage>
    </>
  );
};

Hero.defaultProps = {
  image: '',
  angle: 60 + Math.floor(Math.random() * 20),
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string,
  angle: PropTypes.number,
};

export default Hero;
