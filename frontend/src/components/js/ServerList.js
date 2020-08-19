import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Server from "./Server";

const ServerList = () => {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(false);

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

  if (loading) return <Loading />;
  return (
    <div>
      <h1>Server List rendered</h1>
      <ul>
        {servers.map((server) => (
          <Server key={server.id} name={server.name} status={server.status} />
        ))}
      </ul>
    </div>
  );
};

export default ServerList;
