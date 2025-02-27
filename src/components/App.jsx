"use client";
import $ from "jquery";
import { useEffect } from "react";

export const App = () => {

    useEffect(() => {
        $("#button").click(() => {
            $("#test").css("color", "red");
        })
    }, [])

    return <div>
        <p id="test">Test</p>
        <button id="button">Test</button>
    </div>
}