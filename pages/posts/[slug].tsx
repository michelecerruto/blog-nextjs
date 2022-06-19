import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";

type Props = {
	post: PostType;
	morePosts: PostType[];
	preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<>
			<Header />
			<Layout preview={preview}>
				<div className="grid grid-cols-1 md:grid-cols-5 m-5 lg:m-10 lg:mt-10 md:gap-5">
					<div className="md:col-span-1 bg-white"></div>
					<div className="col-span-4 md:col-span-3 bg-white">
						<Container>
							{router.isFallback ? (
								<PostTitle>Loading…</PostTitle>
							) : (
								<>
									<div className="m-10 relative text-black">
										<Head>
											<title>{post.title}</title>
											<meta property="og:image" content={post.ogImage.url} />
										</Head>
										<PostHeader
											title={post.title}
											coverImage={post.coverImage}
											date={post.date}
											author={post.author}
										/>
										<PostBody content={post.content} />
									</div>
								</>
							)}
						</Container>
					</div>
					<div className="col-span-1 bg-white"></div>
				</div>
			</Layout>
		</>
	);
};

export default Post;

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		"title",
		"date",
		"slug",
		"author",
		"content",
		"ogImage",
		"coverImage",
	]);
	const content = await markdownToHtml(post.content || "");

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(["slug"]);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
