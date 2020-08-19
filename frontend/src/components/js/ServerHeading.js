import React from "react";
import "../css/ServerHeading.scss";

const ServerHeading = ({ length, handleInput }) => {
  return (
    <div className="server-heading-container">
      <div className="server-number">
        <h1>Servers</h1>
        <h3>Number of elements: {length}</h3>
      </div>
      <div className="server-input">
        <input
          type="text"
          name="search"
          id="filter"
          placeholder="Search"
          onChange={handleInput}
          className="search"
        />
      </div>
    </div>
  );
};

export default ServerHeading;
