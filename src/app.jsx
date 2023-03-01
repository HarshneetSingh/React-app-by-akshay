import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";



const App = () => {
    return (
        <>
        <Header />
        <Body/>
        <Footer />
        </>

    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);


