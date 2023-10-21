import React from "react";

import ReactDOM from "react-dom/client";


// React.createElement => Object => HTMLElement(render)
const heading = React.createElement(

    "h1",

    {id: "heading"},

    "Namaste React 🚀"
);

console.log(heading);


// React Element
const title = (

    <h1>This is title.</h1>
);

console.log(title);

// React Components
// Class based Components
// Functional Components

// React Component
const BodyComponent = () => (

    <h1>This is a Body Component.</h1>
);

const TrailerComponent = () => (

    <div id="container">
        {title}
        {BodyComponent()}
        <BodyComponent />
        <BodyComponent></BodyComponent>
        <h1 className="Trailer">This is a Trailer Component.</h1>
    </div>
    
);


 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<TrailerComponent />);