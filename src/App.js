import React, { Component } from 'react';

import './styles/global';

import SideBar from './components/sidebar';
import Player from './components/player';

import { Wrapper, Container } from './styles/components';

const App = () => (
  <Wrapper>
    <Container>
      <SideBar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;
