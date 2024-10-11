import React from "react";
import ReactDOM from "react-dom/client";
//rect like as library hai for a specific task like in tools is hammer
//angula and vue are like a tools or framework all thing are present
//rect dom are convert to code to actual browser dom;
import App from "./App.jsx";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

//gtelementid used from get id from in givven html file
//react.strictmode are used for finding any error in react is correct this 
//catch many types of in error in rect
//ReactDOM.createRoot(document.getElementById("root")).render(
  ReactDOM.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.getElementById('root'))
;
