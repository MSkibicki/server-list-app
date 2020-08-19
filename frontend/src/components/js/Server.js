import React from "react";
import "../css/Server.scss";
import ServerMenu from "./ServerMenu";
import axios from "axios";

const Server = ({ name, status, id }) => {
  const serverOn = () => {
    axios
      .put(`http://localhost:5000/servers/${id}/on`, { status: "ONLINE" })
      .then((response) => {
        console.log(response);
      });
  };

  const serverOff = () => {
    axios
      .put(`http://localhost:5000/servers/${id}/off`, { status: "OFFLINE" })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <li className="server">
      <h1>{name}</h1>
      <h3 className={`${status === "ONLINE" ? "online" : "offline"}`}>
        {status}
      </h3>
      <ServerMenu serverOn={serverOn} serverOff={serverOff} status={status} />
    </li>
  );
};

export default Server;
