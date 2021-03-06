import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import Nav from '../components/Nav';

describe('Nav', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  describe('Render', () => {
    it('correctly renders the snapshot', () => {
      const { asFragment } = render(
        <Router history={history}>
          <Nav />
        </Router>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('renders the navbar and links', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Nav />
        </Router>
      );
      const elements = [
        getByTestId('nav-bar'),
        getByTestId('home-link'),
        getByTestId('projects-link'),
        getByTestId('about-link'),
        getByTestId('contact-link'),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe('Links', () => {
    const linkNames = ['about', 'projects', 'contact'];
    it('logo pushes history when clicked', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Nav />
        </Router>
      );

      const homeLink = getByTestId('home-link');

      fireEvent.click(homeLink);
      expect(history.location.pathname).toBe('/');
    });

    it('NavLinks push history to correct page when clicked', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Nav />
        </Router>
      );

      const NavLinks = linkNames.map((linkName) => ({
        name: linkName,
        node: getByTestId(`${linkName}-link`),
      }));

      NavLinks.forEach((NavLink) => {
        fireEvent.click(NavLink.node);
        expect(history.location.pathname).toBe(`/${NavLink.name}`);
      });
    });

    it('NavLinks are rendered with first letter capitalized', () => {
      const { getByText } = render(
        <Router history={history}>
          <Nav />
        </Router>
      );

      const renderedLinkNames = ['About', 'Projects', 'Contact'];

      renderedLinkNames.forEach((linkName) => {
        expect(getByText(linkName)).toBeInTheDocument();
      });
    });
  });
});
