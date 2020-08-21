import React, { useState } from "react";
import "../css/ServerMenu.scss";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const ServerMenu = ({ serverOn, serverOff, serverStatus }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnOff = () => {
    handleClose();
    if (serverStatus === "ONLINE") {
      serverOff();
    } else {
      serverOn();
    }
  };

  return (
    <div className="server-icon">
      <MoreHorizIcon
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      ></MoreHorizIcon>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOnOff}>
          {`
          ${serverStatus === "ONLINE" ? "Turn Off" : "Turn On"}
          `}
        </MenuItem>
        <MenuItem onClick={handleClose}>Reboot</MenuItem>
      </Menu>
    </div>
  );
};

export default ServerMenu;
