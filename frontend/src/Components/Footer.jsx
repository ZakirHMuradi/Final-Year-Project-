// src/Components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='bg-linear-0 from-[#67C3F3] to-[#5A98F2] text-white'>
			<div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10'>
				<div>
					<h3 className='text-xl font-bold mb-4'>AI-Leishmania</h3>
					<p className='text-sm'>
						Revolutionizing parasite detection through deep learning. Fast,
						accurate, and accessible diagnostics.
					</p>
				</div>
				<div>
					<h3 className='text-xl font-bold mb-4'>Quick Links</h3>
					<ul className='flex flex-col gap-2 text-sm'>
						<Link to='/'>Home</Link>
						<Link to='/about'>About</Link>
						<Link to='/contact'>Contact</Link>
						<Link to='/services'>Services</Link>
					</ul>
				</div>
				<div>
					<h3 className='text-xl font-bold mb-4'>Contact Us</h3>
					<p className='text-sm'>Email: info@leishmania-ai.org</p>
					<p className='text-sm'>Phone: +123 456 7890</p>
					<p className='text-sm'>Location: Global Research Lab, Earth</p>
				</div>
			</div>
			<div className='text-center text-sm border-t border-white/30 py-4'>
				© {new Date().getFullYear()} AI-Leishmania. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
