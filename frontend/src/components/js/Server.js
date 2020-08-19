import React from "react";
import "../css/Server.scss";
import ServerMenu from "./ServerMenu";

const Server = ({ name, status }) => {
  return (
    <li className="server">
      <h1>{name}</h1>
      <h3 className={`${status === "ONLINE" ? "online" : "offline"}`}>
        {status}
      </h3>
      <ServerMenu />
    </li>
  );
};

export default Server;
