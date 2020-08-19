import React, { useEffect, useState } from "react";
import "../css/ServerList.scss";
import axios from "axios";
import Loading from "./Loading";
import Server from "./Server";
import TableHeading from "./TableHeading";
import ServerHeading from "./ServerHeading";

const ServerList = () => {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      setLoading(true);

      try {
        const result = await axios.get("http://localhost:5000/servers");

        if (!isCancelled) {
          setLoading(false);
          setServers(result.data);
        }
      } catch (e) {
        if (!isCancelled) {
          console.error(e);
        }
      }
    };

    getData();

    return () => {
      isCancelled = true;
    };
  }, []);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  let filterServers = servers.filter((server) => {
    return server.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  if (loading) return <Loading />;
  return (
    <div className="server-container">
      <ServerHeading length={servers.length} handleInput={handleInput} />
      <TableHeading />
      <ul className="server-list">
        {filterServers.map((filteredServer) => (
          <Server
            key={filteredServer.id}
            name={filteredServer.name}
            status={filteredServer.status}
          />
        ))}
      </ul>
    </div>
  );
};

export default ServerList;
