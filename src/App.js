import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Carregando from './pages/Carregando';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <Login/> } />
            <Route path="/Carregando" element={ <Carregando/> } />
            <Route path="/search" element={ <Search/> } />
            <Route path="/album/:id" element={ <Album/>} />
            <Route path="/favorites" element={< Favorites/> } />
            <Route path="/profile/edit" element={< ProfileEdit/> } />
            <Route path="/profile" element={ <Profile/> } />
            <Route path="" element={<NotFound/> } />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
