import React, { useState } from "react";
import "../css/Server.scss";
import ServerMenu from "./ServerMenu";
import axios from "axios";
import classNames from "classnames";

const Server = ({ name, status, id }) => {
  const [serverStatus, setServerStatus] = useState(null);

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
    "online": status === "ONLINE",
    "offline": status === "OFFLINE",
    "put-online": serverStatus !== null && serverStatus === "ONLINE",
    "put-offline": serverStatus !== null && serverStatus === "OFFLINE",
  });

  return (
    <li className="server">
      <h1>{name}</h1>
      <h3 className={serverClass}>{serverStatus ? serverStatus : status}</h3>
      <ServerMenu
        serverOn={serverOn}
        serverOff={serverOff}
        status={status}
        serverStatus={serverStatus}
      />
    </li>
  );
};

export default Server;
