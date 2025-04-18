import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import AdminRoute from "./Components/AdminRoute";
import AddUser from "./Pages/AddUser";
import StreamlitEmbed from "./Pages/StreamlitEmbed";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/contact-us' element={<Contact />} />
				<Route path='/ai-analysis' element={<StreamlitEmbed />} />
				<Route
					path='/admin/add-user'
					element={
						<AdminRoute>
							<AddUser />
						</AdminRoute>
					}
				/>
				{/* <Route path='/about' element={<About />} />
				<Route path='/' element={<Home />} /> */}
			</Routes>
		</div>
	);
}

export default App;
