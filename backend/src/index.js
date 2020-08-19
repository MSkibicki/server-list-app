const PORT = 5000;
const serverList = require("./servers.json");
const ONLINE = "ONLINE";
const OFFLINE = "OFFLINE";
const REBOOTING = "REBOOTING";
const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

app.get("/servers", (req, res) => {
  res.send(serverList);
});

app.get("/servers/:serverId", (req, res) => {
  const serverFound = findServer(req, res);

  res.send(serverFound);
});

app.put("/servers/:serverId/on", (req, res) => {
  const serverFound = findServer(req, res);

  if (serverFound.status !== OFFLINE) {
    return res.status(400).send({ errorMessage: `Server is not offline` });
  }

  serverFound.status = ONLINE;
  res.send(serverFound);
});

app.put("/servers/:serverId/off", (req, res) => {
  const serverFound = findServer(req, res);

  if (serverFound.status !== ONLINE) {
    return res.status(400).send({ errorMessage: `Server is not online` });
  }

  serverFound.status = OFFLINE;
  res.send(serverFound);
});

app.put(`/servers/:serverId/reboot`, (req, res) => {
  const serverFound = findServer(req, res);

  if (serverFound.status !== ONLINE) {
    return res.status(400).send({ errorMessage: `Server is not online` });
  }

  serverFound.status = REBOOTING;
  setTimeout(() => {
    serverFound.status = ONLINE;
  }, getRandomTime(1000, 5000));

  res.send(serverFound);
});

function findServer(req, res) {
  const serverId = parseInt(req.params.serverId);

  const serverFound = serverList.find((it) => it.id === serverId);
  if (!serverFound) {
    throw res.status(404).send({ errorMessage: `Server does not exist` });
  }
  return serverFound;
}

function getRandomTime(min, max) {
  return Math.random() * (max - min) + min;
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
