import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeroImage = styled.div`
  background-image: linear-gradient(
      ${(props) => `${props.theme.shadow}${props.image ? '80' : 'FF'}`},
      ${(props) => `${props.theme.shadow}${props.image ? '80' : 'FF'}`}
    ),
    url(${(props) => props.image});
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

const Hero = ({ title, subtitle, image }) => {
  const lines = subtitle.split('\\n');
  return (
    <>
      <HeroImage image={image}>
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
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Hero;
