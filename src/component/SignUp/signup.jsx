import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [work, setWork] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const postUserData =  (e) => {
    
    e.preventDefault();
    fetch("/register", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    }).then(res => res.text()).then(data => window.alert(data)).then(() => history.push("/signin"))

    // const res = await fetch("/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "*/*",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     phone,
    //     work,
    //     password,
    //     cpassword,
    //   }),
    // });

    // const data = await res.json();
    // console.log(data);
    // if (data.status === 400 || !data) {
    //   window.alert("Invalid Registration");
    //   console.log("Invalid Registration");
    // } else {
    //   window.alert("Registration Successfull");
    //   console.log("Registration Successfull");

    //   history.push("/login");
    // }
    

  }

  return (
    <div className="sign-up">
      <form method="post">
        <input
          type="text"
          name="name"
          className="name__input"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="off"
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          className="email__input"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
        />{" "}
        <br />
        <input
          type="number"
          name="phone"
          className="phone__input"
          placeholder="Phone..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          autoComplete="off"
        />{" "}
        <br />
        <input
          type="text"
          name="work"
          className="work__input"
          placeholder="Work Details..."
          value={work}
          onChange={(e) => setWork(e.target.value)}
          required
          autoComplete="off"
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
          autoComplete="off"
        />{" "}
        <br />
        <input
          type="password"
          name="cpassword"
          className="cpassword__input"
          placeholder="Confirm Password..."
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          required
          autoComplete="off"
        />{" "}
        <br />
        <button type="submit" onClick={postUserData}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
