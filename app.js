import React from "react";
import  ReactDOM from "react-dom/client";
const header1 = React.createElement(
    "h2",// HTML elementTAG
    null,// PROPS you need to send like class and all
    "Harshneet" // children you want to display
);
const header2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Harshneet"
    ));
const container = React.createElement(
    "div",
    { className: "container" },
    [header1, header2]
);

const root = ReactDOM.createRoot(document.getElementById("root")); // 
root.render(container);