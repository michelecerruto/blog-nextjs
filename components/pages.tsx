import Link from "next/link";

const Pages = () => {
	return (
		<div className="text-center">
			<div className="grid space-y-2 ">
				<Link href="/contact">
					<a className="hover:underline">Contact</a>
				</Link>
				<Link href="" target="_blank">
					<a className="hover:underline">Privacy Policy</a>
				</Link>
				<Link href="" target="_blank">
					<a className="hover:underline">Terms of Service</a>
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
						className="hover:underline cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default Pages;
