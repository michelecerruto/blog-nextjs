import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
};

const PostPreview = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: Props) => {
	return (
		<div className="border-b-2 border-black pb-5">
			<div className="mb-4">
				<CoverImage slug={slug} title={title} src={coverImage} />
			</div>
			<h3 className="text-2xl mb-3">
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a className="hover:underline font-bold">{title}</a>
				</Link>
			</h3>
			<div className="mb-1">
				<DateFormatter dateString={date} />
			</div>
			{/*
				<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
			<Avatar name={author.name} picture={author.picture} />
			*/}
			
		</div>
	);
};

export default PostPreview;
