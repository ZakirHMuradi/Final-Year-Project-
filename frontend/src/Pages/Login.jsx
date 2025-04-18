import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/"); // or wherever you want after login
		} catch (err) {
			setError("Invalid email or password");
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E7F0FF] to-[#D4E5FF]'>
			<div className='bg-white shadow-xl rounded-3xl p-10 w-full max-w-md'>
				<h2 className='text-3xl font-bold text-center text-[#2AA7FF] mb-6'>
					Welcome Back
				</h2>
				<form className='space-y-6' onSubmit={handleLogin}>
					{error && <p className='text-red-500 text-sm text-center'>{error}</p>}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-1'>
							Email Address
						</label>
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full px-4 py-2 border border-gray-300 rounded-xl'
							required
						/>
					</div>
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-1'>
							Password
						</label>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='w-full px-4 py-2 border border-gray-300 rounded-xl'
							required
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-[#2AA7FF] text-white py-3 rounded-xl hover:bg-[#1e90ff] transition'
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
