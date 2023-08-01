import React from "react";
import { Redirect } from "react-router-dom";
import Carregando from "./Carregando";
import "./styles/Login.css";
import { createUser } from "../services/userAPI";

class Login extends React.Component {
  state = {
    userName: "",
    email: "",
    disabledState: true,
    clicked: undefined,
  };

  btnEnterValidation = (target) => {
    const { value } = target;
    const min = 3;
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

  onClickEnter = async () => {
    const { userName, email } = this.state;
    this.setState({
      clicked: false,
    });
    await createUser({ name: userName, email: email });

    this.setState({
      clicked: true,
    });
  };

  enterKey = async (event) => {
    const { disabledState } = this.state;
    if (event.key === "Enter" && disabledState === false) {
      this.btn.click();
    } else if (event.key === "Enter" && disabledState === true) {
      window.alert("O usuário deve conter, no mínimo, 3 caracteres");
    }
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
    this.btnEnterValidation(target);
  };

  render() {
    const { userName, email, disabledState, clicked } = this.state;
    if (clicked === true) {
      return <Redirect to="/search" />;
    }
    if (clicked === false) {
      return (
        <div className="carreg">
          <Carregando />
        </div>
      );
    }

    return (
      <div className="background-login">
        <div className="page-login" data-testid="page-login">
          <form>
            <p className="titulo">G TUNES </p>
            <label htmlFor="nome">
              <input
                name="userName"
                placeholder="Digite o seu usuário..."
                onKeyPress={this.enterKey}
                onChange={this.handleChange}
                value={userName}
                id="nome"
                data-testid="login-name-input"
                type="text"
              />
            </label>
            <label htmlFor="email">
              <input
                name="email"
                placeholder="Digite o seu email..."
                onKeyPress={this.enterKey}
                onChange={this.handleChange}
                value={email}
                id="nemail"
                data-testid="login-name-input"
                type="text"
              />
            </label>
            <button
              data-testid="login-submit-button"
              id="button"
              type="button"
              disabled={disabledState}
              ref={(node) => (this.btn = node)}
              onClick={this.onClickEnter}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
