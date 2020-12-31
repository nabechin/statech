import React from "react";
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import "../css/LoginSub.css";

const LoginValid = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="login-box-form" onSubmit={handleSubmit(onSubmit)}>
      <label id="email" className="login-box-label">メールアドレス<br/>
        {errors.email && errors.email.type === "required" && <div className="error">{errors.email.message}</div>}
        {errors.email && errors.email.type === "pattern" && <div className="error">{errors.email.message}</div>}
        <input 
          name="email" 
          className="login-box-input" 
          ref={register({ 
                required: {
                  value: true,
                  message: "メールアドレスを入力してください"
                }, 
                pattern: {
                  value: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: "メールアドレスの形式が不正です"
                }
              })}
        >
        </input>
      </label>
      <label className="login-box-label">パスワード<br/>
        {errors.email && errors.email.type === "required" && <div className="error">{errors.password.message}</div>}
        <input 
          type="password" 
          name="password" 
          className="login-box-input" 
          ref={register({ 
            required: {
              value: true,
              message: "パスワードを入力してください"
            }
            })}
        >
        </input>
      </label>
      <a href="/aaa" className="forgot-password-link">パスワードを忘れた方はこちら</a>
      <Button 
        variant="outlined" 
        type="submit"
        style={{ color: "#e0f2f1", backgroundColor: "black" ,position: "relative", top: "40px", left: "-215px"}}>
      ログイン
      </Button>
  </form>
  )
}

export default LoginValid;