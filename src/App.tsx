import { NavLink, Outlet } from "react-router";

function App() {
	return (
		<div className="flex flex-col h-screen bg-slate-700 text-orange-200">
			<div className="flex flex-row justify-center gap-5 p-5">
				<NavLink
					to="/"
					viewTransition
					className={({ isActive }) =>
						isActive ? "underline underline-offset-2" : ""
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					viewTransition
					className={({ isActive }) =>
						isActive ? "underline underline-offset-2" : ""
					}
				>
					About
				</NavLink>
			</div>
			<Outlet />
		</div>
	);
}

export default App;
