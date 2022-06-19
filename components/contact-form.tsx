import React, { useState } from "react";

export default function ContactForm() {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	//   Form validation
	const [errors, setErrors] = useState({
		fullname: false,
		email: false,
		subject: false,
		message: false,
	});

	//   Setting button text
	const [buttonText, setButtonText] = useState("Send");

	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	const handleValidation = () => {
		let tempErrors = {
			fullname: false,
			email: false,
			subject: false,
			message: false,
		};
		let isValid = true;

		if (fullname.length <= 0) {
			tempErrors.fullname = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors.email = true;
			isValid = false;
		}
		if (subject.length <= 0) {
			tempErrors.subject = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors.message = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	//   const [form, setForm] = useState(false);

	const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText("Sending");
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					email: email,
					fullname: fullname,
					subject: subject,
					message: message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText("Send");

				// Reset form fields
				setFullname("");
				setEmail("");
				setMessage("");
				setSubject("");
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setButtonText("Send");
			// Reset form fields
			setFullname("");
			setEmail("");
			setMessage("");
			setSubject("");
		}
		console.log(fullname, email, subject, message);
	};

	return (
		<div className="">
			<form onSubmit={handleSubmit} className="grid grid-cols-1">
				<h1 className="text-2xl font-bold mb-5 text-center">Send a message</h1>
				<label htmlFor="fullname" className="text-gray-500">
					Full name<span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					value={fullname}
					onChange={(e) => {
						setFullname(e.target.value);
					}}
					name="fullname"
					className="border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-black text-black"
				/>
				{errors?.fullname && (
					<p className="text-red-500">Fullname cannot be empty.</p>
				)}

				<label htmlFor="email" className="text-gray-500 mt-4">
					E-mail<span className="text-red-500">*</span>
				</label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					className="border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-black text-black"
				/>
				{errors?.email && (
					<p className="text-red-500">Email cannot be empty.</p>
				)}

				<label htmlFor="subject" className="text-gray-500 mt-4">
					Subject<span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					name="subject"
					value={subject}
					onChange={(e) => {
						setSubject(e.target.value);
					}}
					className="border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-black text-black"
				/>
				{errors?.subject && (
					<p className="text-red-500">Subject cannot be empty.</p>
				)}
				<label htmlFor="message" className="text-gray-500 mt-4">
					Message<span className="text-red-500">*</span>
				</label>
				<textarea
					name="message"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className="border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-black text-black"
				></textarea>
				{errors?.message && (
					<p className="text-red-500">Message body cannot be empty.</p>
				)}
				<div className="flex flex-row items-center justify-center">
					<button
						type="submit"
						className="px-10 mt-8 py-2 bg-black text-white font-light rounded-md text-lg items-center"
					>
						{buttonText}
					</button>
				</div>
				<div className="text-center">
					{showSuccessMessage && (
						<p className="text-green-500 font-semibold text-sm my-2">
							Thankyou! Your Message has been delivered.
						</p>
					)}
					{showFailureMessage && (
						<p className="text-red-500">
							Oops! Something went wrong, please try again.
						</p>
					)}
				</div>
			</form>
		</div>
	);
}
