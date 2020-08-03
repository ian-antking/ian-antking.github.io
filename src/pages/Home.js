import React from 'react';
import Hero from '../components/Hero';
import image from '../assets/header-image.jpg';
import icons from '../assets/icons';

const Home = () => (
  <>
    <Hero
      title="Ian King"
      subtitle="Junior Software Engineer, \n Coding Tutor and Maker"
      image={image}
      angle={70}
    />
    {icons.map((Icon) => (
      <Icon style={{ width: '50px', height: '50px', margin: '10px' }} />
    ))}
  </>
);

export default Home;
