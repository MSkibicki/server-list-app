import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

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
          <li key={server.id}>
            <p>{server.name}</p>
            <p>{server.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;
