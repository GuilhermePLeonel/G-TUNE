import React from "react";
import getMusics from "../services/musicsAPI";
import { getFavoriteSongs } from "../services/favoriteSongsAPI";
import Header from "../components/Header";
import MusicCard from "../components/MusicCard";
import Carregando from "./Carregando";
import "./styles/Album.css";

class Album extends React.Component {
  state = {
    albumObject: [],
    favorites: [],
  };

  componentDidMount = async () => {
    const id = +window.location.href.split("/")[4];
    const result = await getMusics(id);
    this.setState({
      albumObject: result,
    });
    this.getSongs();
  };

  getSongs = async () => {
    const primeiro = await getFavoriteSongs();
    this.setState({
      favorites: primeiro,
    });
  };

  render() {
    const { albumObject, favorites } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div />
        <div className="album-page">
          <div>
            {albumObject.length > 0 ? (
              <div>
                <img src={albumObject[0].artworkUrl100} alt="imagem" />
                <h3 data-testid="album-name">
                  {albumObject[0].collectionName}
                </h3>
                <h4 data-testid="artist-name">{albumObject[0].artistName}</h4>
              </div>
            ) : (
              <Carregando />
            )}
          </div>
          <div>
            <MusicCard
              albumObject={albumObject}
              favorites={favorites}
              getSongs={this.getSongs}
            />
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default Album;
