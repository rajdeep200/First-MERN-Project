import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./about.css";
import AboutImage from "../../images/44.jpg";

const About = () => {
  const history = useHistory();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const loadAboutPage = async () => {
    try {

      // fetch("/about", {
      //   method: "get",
      //   headers: {
      //     Accept: "*/*",
      //     "Content-Type": "application/json",
      //   },
      //   credentials: "include",
      // })
      //   .then((res) => res.text())
      //   .then((data) => console.log(data));

      const res = await fetch("/about", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setName(data.name)
      setEmail(data.email)
      setPhone(data.phone)

      if (!data) {
        throw new Error("Error Occured");
      }
    } catch (error) {
      console.log(error);
      history.push("/signin");
    }
  };

  useEffect(() => {
    loadAboutPage();
  });

  return (
    <div className="about__container">
      <form method="get">
        <div className="about">
          <img src={AboutImage} alt="" />
          <h1>{name}</h1>
          <p className="title">{email}</p>
          <p>{phone}</p>
          <p className="button__container">
            <button className="update__button" onClick={ e => e.preventDefault()}>Edit Profile</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default About;
