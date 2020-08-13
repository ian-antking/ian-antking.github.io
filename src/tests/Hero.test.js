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
});
