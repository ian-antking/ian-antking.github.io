import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
`;

const IconsBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Icons = ({ icons }) => (
  <IconsBox data-testid="icons-box">
    {icons.map((icon) => (
      <IconBox data-testid="rendered-icon" key={icon.name}>
        <icon.Icon />
      </IconBox>
    ))}
  </IconsBox>
);

Icons.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      Icon: PropTypes.func.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Icons;
