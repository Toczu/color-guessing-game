const About = () => {
	return (
		<div className="container mx-auto flex items-center justify-center h-screen text-center">
			<div>
				<h1 className="text-4xl font-bold mb-4">About the Game</h1>
				<p className="mb-8 text-lg">
					The Color Guessing Game is a fun game where you have to guess the
					color of the text based on the background color. You will be presented
					with four options, and you need to choose the correct one.
				</p>
				<p className="mb-8 text-sm">
					Created by Your Name. All rights reserved.
				</p>
				<p className="text-xs">© 2024 Color Guessing Game</p>
			</div>
		</div>
	);
};

export default About;
