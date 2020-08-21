import React, { useState, useEffect } from "react";
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

  const serverReboot = () => {
    axios
      .put(`http://localhost:5000/servers/${id}/reboot`, {
        status: "REBOOTING",
      })
      .then((response) => {
        setServerStatus(response.data.status);
      });
  };

  useEffect(() => {
    const getServerStatus = () => {
      axios.get(`http://localhost:5000/servers/${id}`).then((response) => {
        setServerStatus(response.data.status);
      });
    };

    if (serverStatus === "REBOOTING") {
      let timerId = setInterval(() => {
        getServerStatus();
      }, 1000);

      setTimeout(() => clearInterval(timerId), 6000);
    }
  }, [serverStatus, id]);

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
        serverReboot={serverReboot}
        serverStatus={serverStatus}
      />
    </li>
  );
};

export default Server;
