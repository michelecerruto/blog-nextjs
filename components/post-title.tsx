import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
	return (
		<h1 className="text-4xl font-bold tracking-tighter leading-tight mb-10 text-center">
			{children}
		</h1>
	);
};

export default PostTitle;
