import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", form);
		setSubmitted(true);
		setForm({ name: "", email: "", message: "" });
	};

	return (
		<div>
			<Navbar />
			<div className='min-h-screen bg-[#ffffff] flex flex-col items-center justify-center px-4 py-12 -mt-30'>
				<div className='bg-white p-10 rounded-3xl shadow-lg w-full max-w-2xl'>
					<h2 className='text-3xl font-bold text-[#2AA7FF] mb-4 text-center'>
						Contact Us
					</h2>
					<p className='text-gray-600 text-center mb-8'>
						We’d love to hear from you! Send us a message below.
					</p>

					{submitted && (
						<div className='mb-4 text-green-600 text-center font-semibold'>
							Message sent successfully!
						</div>
					)}

					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Name
							</label>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								required
								className='w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2AA7FF]'
							/>
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Email
							</label>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								required
								className='w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2AA7FF]'
							/>
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Message
							</label>
							<textarea
								name='message'
								value={form.message}
								onChange={handleChange}
								required
								rows='4'
								className='w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2AA7FF]'
							></textarea>
						</div>

						<button
							type='submit'
							className='w-full bg-[#2AA7FF] text-white py-3 rounded-xl hover:bg-[#1e90ff] transition'
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
