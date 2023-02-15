import React from "react";
import ReactDOM from "react-dom/client";


// * Create a Header Component from scratch using Functional Components with JSX
// Add a Logo on left
// © Adda search bar in middle
// © Add User icon on right
// Add CSS to make it look nice

// *Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// Create the same element using JSX
// Create a functional component of the same with JSX
// Pass attributes into the tag in JSX
// Composition of Component(Add a component inside another)



const HeaderComponent = () => {
    return (
        <div className="header">
            <i class="fa-brands fa-digg"></i>


            <div className="searchBar">
                <form action="">
                    <input type="search" placeholder="Search.." />
                    <button type="submit"> <i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

            <i class="fa-regular fa-user"></i>
        </div>
    )
};

const titleReactElem = React.createElement(         // React.createElement => OBJECT => HTMLDOM
    "div",
    { className: "title" },
    [
        React.createElement("h1", { key: 1 }, "Using"),
        React.createElement("h2", { key: 1, style: { color: "red" } }, "React"),
        React.createElement("h3", { key: 1 }, "createElement")
    ]
);
const titleJsx = (                                  // JSX element=> React.createElement => OBJECT => HTMLDOM  babel helps here to turn jsx into react code
    <div className="title">
        <h1>Using</h1>
        <h2 style={{ color: "red" }}>JSX</h2>
        <h3>Element</h3>
    </div>
);
const TitleFuncComp = () => {                        // function returns jsx => JSX element=> React.createElement => OBJECT => HTMLDOM  babel helps here to turn jsx into react code
    return (
        <div className="title">
            <h1>Using</h1>
            <h2 style={{ color: "red" }}>Function</h2>   {/* Pass attributes into the tag in JSX */}
            <h3>Component</h3>
        </div>
    );
};

const Main = () => {
    return (
        <>
            <HeaderComponent /> {/* Composition of Component(Add a component inside another) */}

            <div className="titles">
                {titleReactElem}
                {titleJsx}
                {TitleFuncComp()}
            </div>
        </>

    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);


/**
 * ! {TitleComponent} VS {<TitleComponent/>} VS {<TitleComponent></TitleComponent>} in JSX
 * 
 * 
 * In JSX (JavaScript XML), which is a syntax extension used by frameworks such as React, there are three ways to render a component:
 *
 *   *  Using curly braces: {TitleComponent} - this is used to render the component as a variable or a reference. This syntax is typically 
 *       used when the component is passed as a prop to another component or when it is conditionally rendered based on some logic.
 *
 *   *Self-closing syntax: <TitleComponent/> - this is used to render a component as a self-contained element, with no children. 
 *       This syntax is commonly used for components like buttons, icons, or other UI elements that don't need any children.
 *
 *   *Opening and closing tags: <TitleComponent></TitleComponent> - this syntax is used to render a component with children, i.e.,
 *        nested elements that are contained within the component. This syntax is commonly used for components like containers, headers,
 *           or other elements that wrap other elements.
 *
 *All three syntaxes ultimately render the same component, but the choice of syntax depends on the context and the 
 *specific use case. In general, it's good practice to be consistent with the chosen syntax within a codebase to ensure 
 *readability and maintainability.    
 *
**/