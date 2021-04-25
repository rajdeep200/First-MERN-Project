import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    fetch("/logout", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history.push("/")
        if (res.status !== 200) {
          throw new Error("Error Occured");
        }
      })
      .catch((error) => console.log(error));
  });

  return <div></div>;
};

export default Logout;
