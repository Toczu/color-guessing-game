import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {
	createBrowserRouter,
	createRoutesFromChildren,
	Route,
	RouterProvider,
} from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import "./index.css";
import Game from "./pages/Game.tsx";

const router = createBrowserRouter(
	createRoutesFromChildren(
		<Route element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
      <Route path="game" element={<Game />} />
		</Route>
	)
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
