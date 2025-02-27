"use client";
import $ from "jquery";
import { useEffect } from "react";
import BootstrapClient from "./BootstrapClient";

export const App = () => {
  useEffect(() => {}, []);

  return (
    <>
      <BootstrapClient />
      <form className="d-flex flex-column w-25">
        <input placeholder="Username" />
        <input placeholder="Password" type="password" />
        <button id="button" className="btn btn-primary">
          Test
        </button>
      </form>
    </>
  );
};
