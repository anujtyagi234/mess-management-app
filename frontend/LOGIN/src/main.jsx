import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Loginu/login.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<Login />}></Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
