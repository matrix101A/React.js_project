import React from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
export default function Header() {
  return (
    <div className="secondary ui pointing menu">
      <Link to="/" className="item">
        streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item ">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}
