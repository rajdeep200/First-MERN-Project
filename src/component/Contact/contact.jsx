import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import "./contact.css";

const Contact = () => {

  const history = useHistory()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const loadContactDetails = async () => {
    try {
      const res = await fetch("/getcontact", {
        method: "get",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
      })
  
      const userData = await res.json()
      setName(userData.name)
      setEmail(userData.email)
      setPhone(userData.phone)

      if(!userData){
        throw new Error("Error Occured")
      }

    } catch (error) {
      console.log(error)
      history.push("/signin")
    }
    
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    const res = await fetch('/contact', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,email,message
      })
    })

    const data = await res.json()
    if(!data){
      console.log("Error while sending message")
    }else{
      alert("message sent successfully")
      setMessage("")
    }
  }

  useEffect(() => {
    loadContactDetails()
  },)

  return (
    <div className="contact">
      <div className="upper__container">
        <div className="container__field">
          <CallIcon />
          <div className="details">
            <p>
              Phone <br /> {phone}
            </p>
          </div>
        </div>
        <div className="container__field">
          <MailIcon />
          <div className="details">
            <p>
              Email <br /> {email}
            </p>
          </div>
        </div>
        <div className="container__field">
          <HomeWorkIcon />
          <div className="details">
            <p>
              Address <br /> Memari, Bardhaman
            </p>
          </div>
        </div>
      </div>
      <div className="form__container">
      <form  method="post">
        <input
          type="name"
          name="name"
          className="name__input"
          placeholder="Name..."
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          className="email__input"
          value={email}
          placeholder="Email..."
          required
        />{" "}
        <br />
        <textarea name="message" id="" cols="10" rows="2" value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter Message..."></textarea>
        <br />
        <button type="submit" disabled={ message.length <1 } onClick={sendMessage} >Send</button>
        
      </form>
    </div>
    </div>
  );
};

export default Contact;
