import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <h1 className="head">
            Namaste React Using JSX
        </h1>
    )
}

const HeadingComponent = () => {
    return (
        <div id="container">
            {Title()}
            <Title />
           <h1>Namaste React Using Functional Component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));-

root.render(<HeadingComponent />);




