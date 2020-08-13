import React from 'react';
import { render } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders the correct snapshot', () => {
    const { asFragment } = render(
      <Hero title="test-title" subtitle="test-subtitle" angle={60} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct title and subtitle', () => {
    const { getByText } = render(
      <Hero title="test-title" subtitle="test-subtitle" />
    );

    expect(getByText('test-title')).toBeInTheDocument();
    expect(getByText('test-subtitle')).toBeInTheDocument();
  });

  it('renders the hero image with an angled lower border', () => {
    const { getByTestId } = render(
      <Hero title="test-title" subtitle="test-subtitle" angle={70} />
    );

    const heroImage = getByTestId('hero-image');
    expect(heroImage).toHaveStyle(
      'clip-path: polygon(0 0,100% 0,100% 100%,0 70%)'
    );
  });
});
