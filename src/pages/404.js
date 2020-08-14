import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PageNotFoundImage } from '../assets/undraw_page_not_found_su7k.svg';

const StyledImage = styled(PageNotFoundImage)`
  width: 75vw;
  height: 75vw;
`;

const Page404 = () => (
  <>
    <StyledImage />
    <h2>Oops, looks like you took a wrong turn.</h2>
  </>
);

export default Page404;
