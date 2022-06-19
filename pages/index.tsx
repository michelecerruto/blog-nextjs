import Layout from "../components/layout";
import Container from "../components/container";
import Header from "../components/header";
import Hero from "../components/hero";
import Head from "next/head";
import Post from "../types/post";
import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/api";

type Props = {
	allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
	return (
		<Layout>
			<Head>
				<title>Blog</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content="Blog" key="title" />
			</Head>
			<Header></Header>
			<Container>
				<Hero
					title="Explore the library"
					message="Investing basic in plain English."
				/>
			</Container>
			<Container>
				{allPosts.length > 0 && <MoreStories posts={allPosts} />}
			</Container>
		</Layout>
	);
};

export default Index;

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"coverImage",
		"excerpt",
	]);

	return {
		props: { allPosts },
	};
};
