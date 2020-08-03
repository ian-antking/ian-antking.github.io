import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import themes from './themes';
import Home from './pages/Home';

const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

function App() {
  const [theme] = useState('default');

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppContainer className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/projects" component={() => <h1>Projects</h1>} />
          <Route path="/" exact component={Home} />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
