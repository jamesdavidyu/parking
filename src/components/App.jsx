"use client";
import $ from "jquery";
import { useEffect } from "react";
import BootstrapClient from "./BootstrapClient";

export const App = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
    $(document).ready(() => {
      $("#button").click(() => {
        alert("Working");
      });
    });
  }, []);

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
