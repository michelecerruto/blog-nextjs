import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
	return (
		<div>
			<div className="grid md:grid-cols-1 items-center mb-6 text-center">
				<div className="">
					<DateFormatter dateString={date} />
				</div>
				{
					/*
					<div className="">
					<Avatar name={author.name} picture={author.picture} />
					</div>
					*/
				}
			</div>
			<PostTitle>{title}</PostTitle>
			<div className="hidden">
				<Avatar name={author.name} picture={author.picture} />
			</div>
			
			<div className="mb-8">
				<CoverImage title={title} src={coverImage} />
			</div>
		</div>
	);
};

export default PostHeader;
