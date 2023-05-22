import React from "react";
import { Link } from "react-router-dom";
import Carregando from "./Carregando";
import searchAlbumsAPI from "../services/searchAlbumsAPI";
import "./styles/Search.css";
import Header from "../components/Header";

class Search extends React.Component {
  state = {
    bandName: "",
    artista: "",
    disabledState: true,
    clicked: undefined,
    searchObject: [],
  };

  btnEnterValidation = (target) => {
    const { value } = target;
    const min = 2;
    if (value.length >= min) {
      this.setState({
        disabledState: false,
      });
    } else if (value.length < min) {
      this.setState({
        disabledState: true,
      });
    }
  };

  onClickSearch = async () => {
    const { bandName } = this.state;
    this.setState({
      clicked: true,
    });
    const result = await searchAlbumsAPI(bandName);
    console.log(result);
    this.setState({
      artista: bandName,
      bandName: "",
      clicked: false,
      searchObject: result,
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
    this.btnEnterValidation(target);
  };

  render() {
    const {
      bandName,
      disabledState,
      clicked,
      searchObject,
      // artista,
    } = this.state;

    const link = "/album/";
    return (
      <div>
        <Header />
        <div data-testid="page-search" className="page-search">
          {clicked ? (
            <Carregando />
          ) : (
            <form>
              <label htmlFor="search">
                <input
                  name="bandName"
                  onChange={this.handleChange}
                  value={bandName}
                  id="bandName"
                  placeholder="digite o que quer escutar..."
                  data-testid="search-artist-input"
                  type="text"
                />
                <button
                  data-testid="search-artist-button"
                  type="button"
                  disabled={disabledState}
                  onClick={this.onClickSearch}
                >
                  Pesquisar
                </button>
              </label>
            </form>
          )}
          {/* <div>
            {
              searchObject.length === 0 && bandName.length > 0 ? (
                <div>
                  <p>
                    {`Resultado de álbuns de: ${artista}`}
                  </p>
                </div>)
                : (
                  <p>
                    {`Resultado de álbuns de: ${artista}`}
                  </p>
                )
            }
          </div> */}
          {clicked === false ? (
            <div className="albuns-list">
              {searchObject.length > 0 ? (
                searchObject.map((artist) => (
                  <Link
                    key={artist.index}
                    to={{
                      pathname: link + artist.collectionId,
                      state: artist.collectionId,
                    }}
                    data-testid={`link-to-album-${artist.collectionId}`}
                  >
                    <div className="album" key={artist.artistName}>
                      <p className="album-name">{artist.collectionName}</p>
                      <img src={artist.artworkUrl100} alt="foto" />
                    </div>
                  </Link>
                ))
              ) : (
                <p>
                  NENHUM ALBUM FOI ENCONTRADO NA SUA BUSCA, TENTE OUTRO NOME OU
                  MELHORE SEU GOSTO MUSICAL!
                </p>
              )}
            </div>
          ) : (
            <p>
              Pesquise aqui o seu maior ídolo, aquele artista especial que
              marcou os maiores momentos da sua vida...{" "}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
