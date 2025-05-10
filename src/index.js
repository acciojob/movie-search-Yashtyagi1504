import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import MovieContext from "./context/movieContextProvider";



ReactDOM.render(<MovieContext><App /></MovieContext>, document.getElementById("root"));
