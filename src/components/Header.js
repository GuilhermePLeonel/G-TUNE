import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from '../pages/Carregando';
import './styles/Header.css';

class Header extends React.Component {
  state = {
    isLoading: true,
    result: undefined,
  }

  async componentDidMount() {
    this.setState({
      isLoading: false,
      result: await getUser(),
    });
  }

  render() {
    const { isLoading, result } = this.state;

    return (
      <header data-testid="header-component"
      className= "header-component">
        <p 
          id= "titulo"
          >G Tunes </p>
          {
          isLoading ? <Carregando /> : (
            <p data-testid="header-user-name">{ "usuario: " + result.name }</p>
          )
        }
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
      </header>
    );
  }
}

export default Header;
