import React from "react";
import Header from "../Header";
import LoginValid from "./LoginVarid"
import "../css/LoginSub.css";


class Login extends React.Component {

  render (){
    return(
      <div>
        <Header></Header>
        <div className="login-box">
          <p className="login-box-title">Share Tech</p>
          <p className="login-box-word">ログイン</p>
          <LoginValid />
          <a href="/aaa" className="create-new-account-link">アカウント作成はこちら</a>
        </div>
      </div>
    )
  }
}

export default Login;
