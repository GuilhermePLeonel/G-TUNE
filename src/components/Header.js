import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../services/userAPI";
import Carregando from "../pages/Carregando";
import "./styles/Header.css";

class Header extends React.Component {
  state = {
    isLoading: true,
    result: undefined,
  };

  async componentDidMount() {
    this.setState({
      isLoading: false,
      result: await getUser(),
    });
  }

  render() {
    const { isLoading, result } = this.state;

    return (
      <header data-testid="header-component" className="header-component">
        <Link to="/">
          <p id="titulo">G Tunes </p>
        </Link>
        {isLoading ? (
          <Carregando />
        ) : (
          <div>
            <p id="user" data-testid="header-user-name">
              <img
                id="user-icon"
                alt="user icon"
                src="https://cdn.icon-icons.com/icons2/827/PNG/512/user_icon-icons.com_66546.png"
              />
              {result.name}
            </p>
          </div>
        )}
        <div className="links">
          <Link to="/search" data-testid="link-to-search">
            Search
          </Link>
          <Link to="/profile" data-testid="link-to-profile">
            Profile
          </Link>
          <Link to="/favorites" data-testid="link-to-favorites">
            Favorites
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
