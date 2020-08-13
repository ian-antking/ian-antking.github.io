import React from 'react';
import { render } from '@testing-library/react';
import Icons from '../components/Icons';

describe('Icons', () => {
  const icons = [
    {
      name: 'test-name1',
      Icon: () => <div>mock-icon1</div>,
      type: 'test-type',
    },
    {
      name: 'test-name2',
      Icon: () => <div>mock-icon2</div>,
      type: 'test-type',
    },
    {
      name: 'test-name3',
      Icon: () => <div>mock-icon3</div>,
      type: 'test-type',
    },
  ];

  it('renders the correct snapshot', () => {
    const { asFragment } = render(<Icons icons={icons} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the IconsBox', () => {
    const { getByTestId } = render(<Icons icons={icons} />);

    const iconBox = getByTestId('icons-box');
    expect(iconBox).toBeInTheDocument();
  });

  it('renders the correct number of icons', () => {
    const { getAllByTestId } = render(<Icons icons={icons} />);

    const renderedIcons = getAllByTestId('rendered-icon');
    expect(renderedIcons).toHaveLength(3);
  });
});
