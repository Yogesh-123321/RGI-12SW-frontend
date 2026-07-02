import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import DeviceProvider from "./context/DeviceContext";

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>

        <DeviceProvider>

            <App />

        </DeviceProvider>

    </React.StrictMode>

);