import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Luxi-Logo.svg";
import { auth } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";

const Navbar = () => {
	const navigate = useNavigate();
	const { user, isAdmin } = useAuth();
	const handleLogout = () => {
		signOut(auth);
		navigate("/");
	};

	return (
		<div className='flex justify-between px-20 items-center py-10'>
			<div className='flex items-center gap-8'>
				<img src={Logo} alt='' />
				<h1 className='text-2xl font-bold'>AI Diagnosis</h1>
			</div>
			<div className='flex gap-14 font-medium items-center'>
				<Link to={"/"}>Home</Link>
				<button
					onClick={() =>
						window.open("https://ai-predict.streamlit.app", "_blank")
					}
				>
					Leishmaniasis Prediction
				</button>
				{isAdmin && <Link to={"/admin/add-user"}>Add User</Link>}
				<Link to={"/contact-us"}>Contact Us</Link>
				{user ? (
					<button
						onClick={handleLogout}
						className='text-white bg-[#2AA7FF] px-6 py-2 rounded-2xl shadow-2xl shadow-blue-400'
					>
						Logout
					</button>
				) : (
					<Link
						to={"/login"}
						className='text-white bg-[#2AA7FF] px-6 py-2 rounded-2xl shadow-2xl shadow-blue-400'
					>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
