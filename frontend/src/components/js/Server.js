import React, { useState } from "react";
import "../css/Server.scss";
import ServerMenu from "./ServerMenu";
import axios from "axios";
import classNames from "classnames";

const Server = ({ name, status, id }) => {
  const [serverStatus, setServerStatus] = useState(status);

  const serverOn = () => {
    axios
      .put(`http://localhost:5000/servers/${id}/on`, { status: "ONLINE" })
      .then((response) => {
        setServerStatus(response.data.status);
      });
  };

  const serverOff = () => {
    axios
      .put(`http://localhost:5000/servers/${id}/off`, { status: "OFFLINE" })
      .then((response) => {
        setServerStatus(response.data.status);
      });
  };

  const serverClass = classNames({
    "online": serverStatus === "ONLINE",
    "offline": serverStatus === "OFFLINE",
  });

  return (
    <li className="server">
      <h1>{name}</h1>
      <h3 className={serverClass}>{serverStatus}</h3>
      <ServerMenu
        serverOn={serverOn}
        serverOff={serverOff}
        serverStatus={serverStatus}
      />
    </li>
  );
};

export default Server;
