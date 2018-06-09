import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars2.githubusercontent.com/u/7014252?s=460&v=4" alt="User" />
      Riguel Figueiro
    </User>
  </Container>
);

export default Header;
