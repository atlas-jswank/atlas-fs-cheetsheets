import React from "react";
import Heart from "../assets/heart.svg";
import "./Header.css";

export function Header() {
  return (
    <div className="heading">
      <div>
        <a href="https://react.dev" target="_blank" className="logo"></a>
      </div>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Atlas + React =
        <img
          style={{ display: "inline-block", width: "100px" }}
          src={Heart}
          alt="heart"
          className="heartbeat"
        />
      </h1>
    </div>
  );
}
