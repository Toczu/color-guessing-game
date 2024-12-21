import { Link } from "react-router";

const Home = () => {
	return (
		<div className="container mx-auto h-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold mb-4">Color Guessing Game</h1>
			<p className="mb-8 text-lg">
				Welcome to the Game!
			</p>
			<Link to="/game" viewTransition>
				<button className="bg-emerald-500 text-white px-6 py-3 rounded-full text-xl drop-shadow-md hover:scale-105">
					Start Game
				</button>
			</Link>
            <Link to="/game" viewTransition>
				<button className="text-red-400 underline underline-offset-2 pt-4 text-xl hover:scale-105">
					Hard mode
				</button>
			</Link>
		</div>
	);
};

export default Home;
