import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<PrimeReactProvider>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</PrimeReactProvider>
);
