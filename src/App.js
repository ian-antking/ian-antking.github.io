import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import themes from './themes';
import Home from './pages/Home';
import Nav from './components/nav';
import Page404 from './pages/404';
import UnderConstruction from './pages/UnderConstruction';

const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

function App() {
  const [theme] = useState('forest');

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppContainer className="App" data-testid="app">
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route path="/about" component={() => <UnderConstruction />} />
          <Route path="/projects" component={() => <UnderConstruction />} />
          <Route path="/contact" component={() => <UnderConstruction />} />
          <Route path="/404" component={() => <Page404 />} />
          <Route path="/" exact component={Home} />
          <Route path="/*" component={() => <Redirect to="/404" />} />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
