// pages/AddUser.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import Navbar from "../Components/Navbar";

const AddUser = () => {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		dateOfBirth: "",
		gender: "",
		phone: "",
		address: "",
		medicalHistory: "",
		role: "patient", // default role
	});
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage("");

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				form.email,
				form.password
			);
			const user = userCredential.user;

			await setDoc(doc(db, "patients", user.uid), {
				firstName: form.firstName,
				lastName: form.lastName,
				email: form.email,
				dateOfBirth: form.dateOfBirth,
				gender: form.gender,
				phone: form.phone,
				address: form.address,
				medicalHistory: form.medicalHistory,
				role: "patient",
				createdAt: new Date(),
			});

			setMessage("✅ Patient registered successfully!");
			setIsError(false);
			setForm({
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				dateOfBirth: "",
				gender: "",
				phone: "",
				address: "",
				medicalHistory: "",
				role: "patient",
			});
		} catch (err) {
			setMessage(`❌ ${err.message}`);
			setIsError(true);
		}
	};

	return (
		<div>
			<Navbar />
			<div className='min-h-screen flex items-center justify-center bg-white from-blue-50 to-blue-100 p-6'>
				<div className='bg-white rounded-2xl shadow-xl p-10 w-full max-w-2xl animate-fade-in -mt-30'>
					<h1 className='text-3xl font-bold text-[#2AA7FF] text-center mb-6'>
						Register New Patient
					</h1>
					<form
						onSubmit={handleSubmit}
						className='grid grid-cols-1 md:grid-cols-2 gap-5'
					>
						<input
							type='text'
							name='firstName'
							placeholder='First Name'
							value={form.firstName}
							onChange={handleChange}
							required
							className='border p-3  border-gray-300 rounded-xl'
						/>
						<input
							type='text'
							name='lastName'
							placeholder='Last Name'
							value={form.lastName}
							onChange={handleChange}
							required
							className='border p-3  border-gray-300 rounded-xl'
						/>
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={form.email}
							onChange={handleChange}
							required
							className='border p-3  border-gray-300 rounded-xl'
						/>
						<input
							type='password'
							name='password'
							placeholder='Password'
							value={form.password}
							onChange={handleChange}
							required
							className='border p-3  border-gray-300 rounded-xl'
						/>
						<input
							type='date'
							name='dateOfBirth'
							value={form.dateOfBirth}
							onChange={handleChange}
							required
							className='border p-3  border-gray-300 rounded-xl'
						/>
						<select
							name='gender'
							value={form.gender}
							onChange={handleChange}
							required
							className='border p-3  border-gray-300 rounded-xl'
						>
							<option value=''>Select Gender</option>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
							<option value='other'>Other</option>
						</select>
						<input
							type='tel'
							name='phone'
							placeholder='Phone Number'
							value={form.phone}
							onChange={handleChange}
							required
							className='border p-3  border-gray-300 rounded-xl'
						/>
						<input
							type='text'
							name='address'
							placeholder='Address'
							value={form.address}
							onChange={handleChange}
							required
							className='border p-3 border-gray-300 rounded-xl'
						/>
						<textarea
							name='medicalHistory'
							placeholder='Medical History (optional)'
							value={form.medicalHistory}
							onChange={handleChange}
							className='border p-3  border-gray-300 rounded-xl md:col-span-2'
						/>
						<button
							type='submit'
							className='bg-[#2AA7FF] hover:bg-[#2a6aff] text-white py-3 rounded-lg font-semibold md:col-span-2'
						>
							Register Patient
						</button>
					</form>
					{message && (
						<p
							className={`mt-6 text-center font-medium ${
								isError ? "text-red-500" : "text-blue-600"
							}`}
						>
							{message}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default AddUser;
