import React from "react";

import ReactDOM from "react-dom/client";

const parent = React.createElement(

    "div",

    {
        id: "parent"
    },

    [
        React.createElement(

            "div",

            {
                id: "child1"
            },

            [
                React.createElement(

                    "h1",

                    {
                        id: "child1h1"
                    },

                    "Child1's h1🚀"
                ),

                React.createElement(

                    "h2",

                    {
                        id: "child1h2"
                    },

                    "Child1's h2 "
                )
            ]
        ),

        React.createElement(

            "div",

            {
                id: "child2"
            },

            [

                React.createElement(

                    "h1",

                    {
                        id: "child2h1"
                    },

                    "Child2's h1"
                ),

                React.createElement(

                    "h2",

                    {
                        id: "child2h2"
                    },

                    "Child2's h2"
                )
            ]
        ),
    ]
);

const commence = ReactDOM.createRoot(

    document.getElementById("root")
);

commence.render(parent);