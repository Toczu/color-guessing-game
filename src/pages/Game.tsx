import Timer from "../xomponents/Timer";

const colors = {
	red: "#DE3C4B",
	green: "#0FB800",
	blue: "#1A8FE3",
	white: "#F4F1DE",
	black: "#212231",
	orange: "#FF9505",
	yellow: "#F4FF52",
	pink: "#FC6DAB",
	purple: "#981F98",
};

const NUMBER_OF_COLORS = Object.keys(colors).length;

const Game = () => {
	const colorToChoose = "red";

	const getTextColor = () =>
		Object.values(colors)[Math.floor(Math.random() * NUMBER_OF_COLORS)];

	return (
		<div className="container mx-auto flex flex-col items-center justify-around h-screen">
			<div className="flex items-end justify-center text-6xl w-full h-2/4 pb-5">
				{colorToChoose.toUpperCase()}
			</div>
			<Timer />
			<div className="h-2/4 w-full flex flex-col items-center justify-center gap-3">
				{Object.entries(colors)
					.slice(0, 4)
					.map(([_, color]) => {
						return (
							<div
								key={color}
								className="w-2/5 flex items-center justify-center h-16 rounded-3xl drop-shadow-md hover:scale-105 hover:cursor-pointer"
								style={{ backgroundColor: color }}
							></div>
						);
					})}
			</div>
		</div>
	);
};

export default Game;
