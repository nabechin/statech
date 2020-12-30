import React from "react"
import Header from "../Header"
import Button from '@material-ui/core/Button';
import "../css/LoginSub.css"


class Login extends React.Component {

  render (){
    return(
      <div>
        <Header></Header>
        <div className="login-box">
          <p className="login-box-title">Share Tech</p>
          <p className="login-box-word">ログイン</p>
          <form className="login-box-form">
            <label className="login-box-label">メールアドレス<br/>
              <input className="login-box-input"></input>
            </label>
            <label className="login-box-label">パスワード<br/>
              <input className="login-box-input"></input>
            </label>
            <a href="/aaa" className="forgot-password-link">パスワードを忘れた方はこちら</a>
            <Button 
              variant="outlined" 
              style={{ color: "#e0f2f1", backgroundColor: "black" ,position: "relative", top: "40px", left: "-215px"}}>
            ログイン
            </Button>
          </form>
          <a href="/aaa" className="create-new-account-link">アカウント作成はこちら</a>
        </div>
      </div>
    )
  }
}

export default Login;
