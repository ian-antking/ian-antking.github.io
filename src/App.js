import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import themes from './themes';
import Home from './pages/Home';
import Nav from './components/Nav';
import Page404 from './pages/404';

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
          <Route path="/404" component={() => <Page404 />} />
          <Route path="/" exact component={Home} />
          <Route path="/*" component={() => <Redirect to="/404" />} />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
