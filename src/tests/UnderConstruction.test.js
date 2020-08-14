import React from 'react';
import { render } from '@testing-library/react';
import UnderConstruction from '../pages/UnderConstruction';

describe('UnderConstruction', () => {
  it('renders the correct snapshot', () => {
    const { asFragment } = render(<UnderConstruction />);

    expect(asFragment()).toMatchSnapshot();
  });
});
