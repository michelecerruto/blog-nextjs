import Container from "./container";
import Social from "./social";
import Pages from "./pages";

const Footer = () => {
	return (
		<footer className="bg-[#000000] text-white w-auto md:grid pt-10 md:grid-cols-3 pb-10">
			<div className=" justify-center text-center grid">
				<img className="w-20 md:w-20 mx-auto mb-4" src="/assets/logo/logo.png" />
			</div>
			<div className="text-xl">
				<Social></Social>
			</div>
			<div className="pb-5 text-xl">
				<Pages></Pages>
			</div>
		</footer>
	);
};

export default Footer;
