import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const SideBar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Your library</span>
        </li>
        <li>
          <a href="">Your daily list </a>
        </li>
        <li>
          <a href="">Played recently</a>
        </li>
        <li>
          <a href="">Musics</a>
        </li>
        <li>
          <a href="">Albuns</a>
        </li>
        <li>
          <a href="">Music stations</a>
        </li>
        <li>
          <a href="">Local files</a>
        </li>
        <li>
          <a href="">Videos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Best of musices</span>
        </li>
        <li>
          <a href="">The best of the rock</a>
        </li>
      </Nav>
    </div>

    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Add new playlist" />
      New playlist
    </NewPlaylist>
  </Container>
);

export default SideBar;
