import Link from "next/link";
import React, { useState } from "react";
import Social from "./social";
import Pages from "./pages";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
	return (
		<>
			<div className="md:flex flex bg-black text-white sticky top-0">
				<h1 className="flex text-3xl font-bold tracking-tight md:tracking-tighter leading-tight m-3 ml-10 mt-3 mb-4 md:text-4xl md:items-center md:m-5 md:ml-40">
					<Link href="/">
						<a className="hover:underline">Blog.</a>
					</Link>
				</h1>
				<div className="m-auto mr-10 md:flex md:ml-auto md:mr-40">
					<button
						className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						<div
							className={`${genericHamburgerLine} ${
								isOpen
									? "bg-white rotate-45 translate-y-3 opacity-80 group-hover:opacity-100 text-white"
									: "bg-white opacity-80 group-hover:opacity-100"
							}`}
						/>
						<div
							className={`${genericHamburgerLine} ${
								isOpen ? "bg-white opacity-0" : "bg-white opacity-80 group-hover:opacity-100"
							}`}
						/>
						<div
							className={`${genericHamburgerLine} ${
								isOpen
									? "bg-white -rotate-45 -translate-y-3 opacity-80 group-hover:opacity-100"
									: "bg-white opacity-80 group-hover:opacity-100"
							}`}
						/>
					</button>

					<div className="space-x-10 hidden md:flex md:text-xl items-center">
						<Link href="/contact">
							<a className="hover:underline">Contact</a>
						</Link>
						<form
							action=""
							id=""
							name=""
							method="post"
						>
							<input
								type="submit"
								value="Subscribe"
								className="border-1 border-black rounded-md py-2 px-4 bg-white text-black font-bold text-xl cursor-pointer"
							/>
						</form>
					</div>
				</div>
			</div>
			{isOpen ? (
				<div className="text-center min-h-full fixed h-auto overflow-hidden w-full grid grid-rows-3 pb-40 py-auto items-center  bg-black text-xl text-white items-start justify-center  md:hidden">
					<div className="text-2xl">
						<Pages></Pages>
					</div>
					<div className="text-2xl">
						<Social></Social>
					</div>
					<div className="">
						<img className="w-20 md:w-20 mx-auto mb-1" src="/assets/logo/logo.png" />
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default Header;
