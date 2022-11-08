import React from "react";
import { logOut } from "./firebase";

export const Home = () => {
  return (
    <>
      <div className="Home">Super Duper Secret App</div>
      <button onClick={logOut}>Logout</button>
    </>
  );
};
