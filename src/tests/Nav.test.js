import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Nav from '../components/Nav';

describe('Nav', () => {
  it('renders the navbar', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <Nav />
      </Router>
    );
    expect(asFragment(<Nav />)).toMatchSnapshot();
  });
});
