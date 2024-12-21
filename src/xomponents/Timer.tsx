import { useEffect, useState } from "react";

const SECONDS_TO_SOLVE = 5;
const SECONDS_TO_SOLVE_HC = 2;

const Timer = ({ hardMode = false }: { hardMode: boolean }) => {
	const [width, setWidth] = useState(100);
	const [secondsLeft, setSecondsLeft] = useState(
		(hardMode ? SECONDS_TO_SOLVE_HC : SECONDS_TO_SOLVE) * 1000
	);

	console.log("asd", secondsLeft);
	console.log("width", width);
	useEffect(() => {
		const timer = setInterval(() => {
			if (secondsLeft > 0) {
				setWidth((p) => p - 10 / SECONDS_TO_SOLVE);
				setSecondsLeft((p) => p - 100);
			} else {
				clearInterval(timer);
			}
		}, 100);

		return () => clearInterval(timer);
	}, [secondsLeft]);

	return (
		<div className="w-2/5 flex justify-end">
			<div
				className="border-b-8 border-orange-200"
				style={{ width: `${width}%`, transition: "width 0.1s ease" }}
			/>
		</div>
	);
};

export default Timer;
