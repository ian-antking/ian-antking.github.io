import React from 'react';
import { render } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders the correct snapshot', () => {
    const { asFragment } = render(
      <Hero title="test-title" subtitle="test-subtitle" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
