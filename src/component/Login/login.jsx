import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = (e) => {
    e.preventDefault()

    fetch('/signin', {
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    }).then(res => res.text()).then( data => {
      window.alert(data)
      history.push('/')
    })
  }

  return (
    <div className="login">
      <form method="POST">
        <input
          type="email"
          name="email"
          className="email__input"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          className="password__input"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <button type="submit" onClick={loginUser}>Login</button>
      </form>
    </div>
  );
};

export default Login;
