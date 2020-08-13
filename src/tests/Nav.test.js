import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Nav from '../components/Nav';

describe('Nav', () => {
  it('renders the navbar', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Nav />
      </Router>
    );
    const testId = getByTestId('nav-bar');
    expect(testId).toBeInTheDocument();
  });
});
