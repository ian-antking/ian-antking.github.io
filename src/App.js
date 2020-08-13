import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import themes from './themes';
import Home from './pages/Home';
import Nav from './components/Nav';

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
        <Nav />
        <Switch>
          <Route path="/about" component={() => <h1>About</h1>} />
          <Route path="/projects" component={() => <h1>Projects</h1>} />
          <Route path="/contact" component={() => <h1>Contact</h1>} />
          <Route path="/" exact component={Home} />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
