import React, {useState, useEffect} from "react";
import "./home.css";

const Home = () => {

  const [name, setName] = useState("")
  const loadHomePage = async () => {
    try {
      const res = await fetch("/about", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const user = await res.json()
      setName(user.name)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadHomePage()
  })
  return (
    <div className="home">
      {
        !name ? 
        (<div className="home__content">
          <p>WELCOME</p>
          <h1>Sign Up & See The Magic</h1>
        </div>):
        (<div className="home__content">
          <p>WELCOME</p>
          <h2>{name}</h2>
          <h1>To The World Of MERN Stack</h1>
        </div>)
      }
      <div className="home__content"></div>
    </div>
  );
};

export default Home;
