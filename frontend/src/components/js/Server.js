import React from "react";
import "../css/Server.scss";

const Server = ({ name, status }) => {
  return (
    <li className="server">
      <h1>{name}</h1>
      <h3>{status}</h3>
    </li>
  );
};

export default Server;
