import Header from "../components/header";
import Layout from "../components/layout";
import ContactForm from "../components/contact-form";

const Contact = () => {
	return (
		<>
			<Header />
			<Layout>
				<div className="grid grid-cols-1 md:grid-cols-5 m-5 lg:m-10 lg:mt-10 md:gap-5">
					<div className="md:col-span-1 bg-white"></div>
					<div className="col-span-4 md:col-span-3 bg-white">
						<h1 className="w-full text-3xl text-center font-bold mb-10">
							Contact Us
						</h1>
						<div className="mb-16">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Praesent elementum facilisis leo vel fringilla est ullamcorper
							eget. At imperdiet dui accumsan sit amet nulla facilities morbi
							tempus. Praesent elementum facilisis leo vel fringilla. Congue
							mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra
							pharetra massa massa ultricies.
						</div>
						<ContactForm />
					</div>
					<div className="col-span-1 bg-white"></div>
				</div>
			</Layout>
		</>
	);
};

export default Contact;
