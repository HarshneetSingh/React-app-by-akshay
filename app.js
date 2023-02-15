import React from "react";
import ReactDOM from "react-dom/client";

// header1 is the object that turns into html code and become as (DOM element) ...

const header1 = React.createElement(
    "h2",// HTML elementTAG
    null,// PROPS you need to send like class and all
    "Harshneet" // children you want to display
);



// JSX = > React.createElement => object => html(dom).... here babel helps jsx to turn into React.createElement
const header2 = (
    <h1>namaste react</h1>
);

// header3 is an function that returns a jsx 
const Header3 =()=> (
    <h1>namaste react</h1>
);
const HeaderComponent =()=>{
    return (
        <div>
            {Header3()}
            {header1}
            {<Header3/>}
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root")); // 

// component  should always be called as a tag 
root.render(<HeaderComponent/>);