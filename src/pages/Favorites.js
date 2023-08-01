import React from "react";
import Header from "../components/Header";
import MusicCard from "../components/MusicCard";
import Carregando from "./Carregando";
import { getFavoriteSongs } from "../services/favoriteSongsAPI";

class Favorites extends React.Component {
  state = {
    favorites: [],
  };

  componentDidMount = async () => {
    this.getSongs();
  };

  getSongs = async () => {
    const primeiro = await getFavoriteSongs();
    this.setState({
      favorites: primeiro,
    });
  };

  render() {
    const { favorites } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {console.log(favorites)}
        <div className="album-page">
          <div>
            {favorites.length > 0 ? (
              <div>
                <h3 data-testid="album-name">Músicas Favoritas</h3>
              </div>
            ) : (
              <Carregando />
            )}
          </div>
          <div>
            <MusicCard
              albumObject={favorites}
              favorites={favorites}
              getSongs={this.getSongs}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
