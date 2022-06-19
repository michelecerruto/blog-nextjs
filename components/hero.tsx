type Props = {
	title: string;
	message: string;
};

const Hero = ({ title, message }: Props) => {
	return (
		<div className="text-center m-10 p-auto bg-white text-black md:w-full text-center items-center md:mb-10 md:mt-20">
			<h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
			<h2 className="text-xl md:text-2xl">{message}</h2>
		</div>
	);
};

export default Hero;
