"use client";

import { useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function BootstrapClient() {
  useEffect(() => {
    $(document).ready(() => {
      $("#button").click(() => {
        alert("Working");
      });
    });
  }, []);
}
