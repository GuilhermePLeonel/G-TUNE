import React from 'react';
import propTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Carregando from '../pages/Carregando';

class MusicCard extends React.Component {
  state = {
    status: undefined,
    awaitingList: undefined,
  }

  onClick = async ({ target }) => {
    const { albumObject, getSongs } = this.props;
    const favSong = albumObject.filter((song) => song.trackName === target.name);
    if(target.checked === false){
      this.setState({
        status: true,
      });
      await removeSong(favSong[0])
      await getSongs();
      this.setState({
        status: false,
      });
    }  
    else {
      this.setState({
      status: true,
    });
    await addSong(favSong[0]);
    await getSongs();
    this.setState({
      status: false,
    });
    } 
  }

  render() {
    const { albumObject, favorites } = this.props;
    const { status, awaitingList } = this.state;
    return (
      <div>
        {awaitingList ? <Carregando /> : null}
        <div>
          {status ? <Carregando /> : null}

          <div>
            {
              albumObject.filter((song) => song.trackId).map((album) => (
                <div key={ album.collectionName }>
                  <p>
                    {album.trackName}
                  </p>
                  <audio
                    data-testid="audio-component"
                    src={ album.previewUrl }
                    controls
                  >
                    <track kind="captions" />
                    O seu navegador não suporta o elemento
                    {' '}
                    <code>audio</code>
                    .
                  </audio>
                  <label htmlFor="checkbox">
                    Favorita
                    <input
                      id="checkbox"
                      name={ album.trackName }
                      type="checkbox"
                      onClick={ this.onClick }
                      checked={
                        favorites.some((song) => song.trackId === album.trackId)
                      }
                      data-testid={ `checkbox-music-${album.trackId}` }
                    />
                  </label>

                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  albumObject: propTypes.string.isRequired,
  favorites: propTypes.string.isRequired,
  getSongs: propTypes.string.isRequired,
};

export default MusicCard;
