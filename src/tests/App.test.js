import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('App', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('renders the App component', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(getByTestId('app')).toBeInTheDocument();
  });

  it('renders the correct snapshot', () => {
    const { asFragment } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
