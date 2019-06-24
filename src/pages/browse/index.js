import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://jfarellmusic.com/wp-content/uploads/2016/06/Fais-Hey-feat-Afrojack-J-Farell-Remix-mp3-image.jpg"
          alt="PLaylist"
        />
        <strong>Dance dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhorer do dance mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://jfarellmusic.com/wp-content/uploads/2016/06/Fais-Hey-feat-Afrojack-J-Farell-Remix-mp3-image.jpg"
          alt="PLaylist"
        />
        <strong>Dance dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhorer do dance mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://jfarellmusic.com/wp-content/uploads/2016/06/Fais-Hey-feat-Afrojack-J-Farell-Remix-mp3-image.jpg"
          alt="PLaylist"
        />
        <strong>Dance dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhorer do dance mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://jfarellmusic.com/wp-content/uploads/2016/06/Fais-Hey-feat-Afrojack-J-Farell-Remix-mp3-image.jpg"
          alt="PLaylist"
        />
        <strong>Dance dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhorer do dance mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
