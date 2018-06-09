import React from 'react';

import { Container, NewPlaylist } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const SideBar = () => (
  <Container>
    <div />

    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Add new playlist" />
      New playlist
    </NewPlaylist>
  </Container>
);

export default SideBar;
