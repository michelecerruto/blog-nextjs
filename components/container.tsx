import { ReactNode, FunctionComponent } from "react";

type Props = {
	children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
	return (
		<div className="container mx-auto md:px-auto text-left md:flex">
			{children}
		</div>
	);
};

export default Container;
