import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import themes from './themes';
import Nav from './components/nav';

const AppContainer = styled.div`
  text-align: center;
  height: 1vh;
`;

function App() {
  const [theme] = useState('default');

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppContainer className="App">
        <GlobalStyle />
        <Nav />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
