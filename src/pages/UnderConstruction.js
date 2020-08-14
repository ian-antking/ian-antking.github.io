import React from 'react';
import styled from 'styled-components';
import { ReactComponent as UnderConstructionImage } from '../assets/undraw_under_construction_46pa.svg';

const StyledImage = styled(UnderConstructionImage)`
  width: 75vw;
  height: 75vw;
`;

const UnderConstruction = () => (
  <>
    <StyledImage />
    <h2>Under Construction</h2>
  </>
);

export default UnderConstruction;
