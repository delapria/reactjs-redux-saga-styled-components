import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://jfarellmusic.com/wp-content/uploads/2016/06/Fais-Hey-feat-Afrojack-J-Farell-Remix-mp3-image.jpg"
        alt="PLaylist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Dance Forever</h1>
        <p>13 músicas</p>

        <button type="submit">PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hyper Theory</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hyper Theory</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hyper Theory</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hyper Theory</td>
          <td>3:56</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
