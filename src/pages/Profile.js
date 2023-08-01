import React from "react";
import Header from "../components/Header";

class Profile extends React.Component {
  state = {
    name: "",
    email: "",
  };

  componentDidMount = () => {
    const { name, email } = JSON.parse(localStorage.getItem("user"));
    this.setState({
      name,
      email,
    });
  };

  render() {
    const { name, email } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <div className="background-login">
          <div className="page-login" data-testid="page-login">
            <div>
              {console.log(name, email)}
              <p className="titulo"> PERFIL</p>
              <h2>Nome: {name}</h2>
              <h2>Email: {email}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
