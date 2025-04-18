import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Services from "../assets/services.svg";
import WhatWeDo from "../assets/what-we-do.svg";
import HowItWorks from "../assets/how-it-works.svg";
import Footer from "../Components/Footer";

const Home = () => {
	return (
		<div className='overflow-x-hidden'>
			<Navbar />
			<header className='pt-20 pl-32 flex flex-col'>
				<h1 className='text-6xl font-bold pt-10'>AI-Powered Leishmania</h1>
				<h1 className='text-6xl font-bold text-[#2AA7FF] mt-6'>
					Parasite Detection
				</h1>
				<p className='w-1/3 mt-10 text-xl text-[#7D7987]'>
					Revolutionizing Microscopic Diagnosis with Deep Learning to attract
					researchers, healthcare, or institutions interested in AI-powered
					diagnosis.
				</p>
				<Link
					to={"/contact-us"}
					className='bg-[#458FF6] w-fit px-10 py-4 rounded-3xl text-white mt-24 shadow-2xl font-medium'
				>
					Consult today
				</Link>
			</header>
			<div className='mt-20'>
				<div className='flex flex-col text-center'>
					<h1 className='text-4xl font-semibold mb-6'>Key Features</h1>
					<hr className='w-16 mx-auto h-1 bg-black rounded-4xl mb-6' />
					<p className='w-2/5 text-center mx-auto text-[#7D7987]'>
						We provide to you the best choiches for you. Adjust it to your
						health needs and make sure your undergo treatment with our highly
						qualified doctors you can consult with us which type of service is
						suitable for your health
					</p>
				</div>
				<div className='services -mt-40 -ml-40'>
					<img src={Services} alt='' className='mx-auto' />
				</div>

				<button className='mx-auto -mt-10 block border-1 border-[#458FF6] text-[#458FF6] px-12 py-2 rounded-2xl'>
					Learn More
				</button>
			</div>
			<div className='flex flex-col mt-20'>
				<div className='flex justify-around gap-10'>
					<div className='w-1/2'>
						<img src={WhatWeDo} alt='' className='mx-auto' />
					</div>
					<div className='flex flex-col w-1/2 px-30 pt-20'>
						<h2 className='text-3xl font-bold mb-6'>What We Do</h2>
						<hr className='w-20 h-1 bg-black rounded-2xl mb-2' />
						<p className='text-[#77829D] w-3/4'>
							We bring artificial intelligence to the frontline of medical
							diagnostics by automating the detection of Leishmania parasites
							from microscopic images. No more time-consuming manual diagnosis.
							Our model enhances diagnostic speed, accuracy, and consistency.
						</p>
						<button className='block w-fit border-1 border-[#458FF6] text-[#458FF6] px-8 py-1 rounded-3xl mt-20'>
							Learn More
						</button>
					</div>
				</div>
				<div className='flex flex-row justify-around gap-10 mt-30'>
					<div className='w-1/2'>
						<img src={HowItWorks} alt='' className='mx-auto' />
					</div>
					<div className='flex flex-col w-1/2 px-30 pt-20'>
						<p className='text-xl text-[#2aa7ff] font-medium'>
							HELPING PATIENTS FROM AROUND THE GLOBE!
						</p>
						<h2 className='text-3xl font-bold mb-6'>
							How <span className='text-[#2aa7ff]'>It Works</span>
						</h2>
						<hr className='w-20 h-1 bg-black rounded-2xl mb-2' />
						<p className='text-[#77829D] w-3/4'>
							We bring artificial intelligence to the frontline of medical
							diagnostics by automating the detection of Leishmania parasites
							from microscopic images. No more time-consuming manual diagnosis.
							Our model enhances diagnostic speed, accuracy, and consistency.
						</p>
						<ul className='flex flex-col gap-6 how-it-works ml-6 mt-8 text-xl text-[#1B3C74] font-semibold'>
							<li>Image Upload</li>
							<li>Automated Analysis</li>
							<li>Instant Diagnosis</li>
						</ul>
					</div>
				</div>
			</div>
			<div className=' mt-20 bg-linear-0 from-[#E7F0FF] to-[#E8F1FF] to-10% flex flex-col'>
				<h1 className='text-3xl font-bold text-center py-20'>Why Choose Us?</h1>
				<p className='text-xl text-center text-[#00373E]'>
					Explore Expert insights, self-care guides, <br /> and tools to support
					your health
				</p>
				<div className='flex justify-center gap-10 mt-6 pb-30'>
					<div className='w-1/7 py-10 px-10 text-center flex flex-col justify-around bg-white rounded-3xl'>
						<h2 className='text-2xl font-semibold'>Reduce Human Error</h2>
						<p className='text-[#00373E] mt-6'>
							Standardize diagnostics with AI to minimize interpretation
							mistakes.
						</p>
						<button className='bg-[#EFC01D] text-white w-fit mx-auto mt-6 px-8 py-1.5 rounded-4xl'>
							Explore
						</button>
					</div>
					<div className='w-1/7 py-10 px-10 text-center flex flex-col justify-around bg-white rounded-3xl'>
						<h2 className='text-2xl font-semibold'>Faster Turnaround Time</h2>
						<p className='text-[#00373E] mt-6'>
							Obtain results in seconds, not hours.
						</p>
						<button className='bg-[#4CCBBB] text-white w-fit mx-auto mt-10 px-8 py-1.5 rounded-4xl'>
							Explore
						</button>
					</div>
					<div className='w-1/7 py-10 px-10 text-center flex flex-col justify-around bg-white rounded-3xl'>
						<h2 className='text-2xl font-semibold'>
							Scalable & Cost-Efficient
						</h2>
						<p className='text-[#00373E] mt-6'>
							Built for labs, hospitals, and research teams seeking a modern
							solution..
						</p>
						<button className='bg-[#F39CAC] text-white w-fit mx-auto mt-6 px-8 py-1.5 rounded-4xl'>
							Explore
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
