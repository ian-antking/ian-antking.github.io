import React from 'react';
import Hero from '../components/Hero';
import image from '../assets/header-image.jpg';
import icons from '../assets/icons';
import Icons from '../components/Icons';

const Home = () => (
  <>
    <Hero
      title="Ian King"
      subtitle="Full Stack Engineer"
      image={image}
      angle={70}
    />
    <Icons icons={icons} />
  </>
);

export default Home;
