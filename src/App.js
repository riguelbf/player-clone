import React, { Component } from 'react';

import './styles/global';

import SideBar from './components/sidebar';
import Player from './components/player';

import { Wrapper, Container, Content } from './styles/components';
import Header from './components/header';

const App = () => (
  <Wrapper>
    <Container>
      <SideBar />
      <Content>
        <Header />
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default App;
