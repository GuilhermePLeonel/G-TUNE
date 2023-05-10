// import React from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
// import Album from './pages/Album';
// import Favorites from './pages/Favorites';
// import Profile from './pages/Profile';
// import ProfileEdit from './pages/ProfileEdit';
// import NotFound from './pages/NotFound';
// import Search from './pages/Search';
// import Carregando from './pages/Carregando';

// function App(){
//     return (
//       <div>
//           <Routes>
//             <Route path="/" element={ <Navigate to="/login" /> } />
//             <Route path="/login" element={ <Login /> } />
//             <Route path="/Carregando" element={ <Carregando/> } />
//             <Route path="/search" element={ <Search/> } />
//             <Route path="/album/:id" element={ <Album/>} />
//             <Route path="/favorites" element={< Favorites/> } />
//             <Route path="/profile/edit" element={< ProfileEdit/> } />
//             <Route path="/profile" element={ <Profile/> } />
//             <Route path="" element={<NotFound/> } />
//           </Routes>
//       </div>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/Carregando" component={ Carregando } />
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
            <Route path="/favorites" component={ Favorites } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route path="/profile" component={ Profile } />
            <Route path="" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


