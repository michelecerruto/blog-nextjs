import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
	posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-2 m-10 gap-10 lg:m-40 lg:mt-20 lg:gap-20">
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
};

export default MoreStories;
