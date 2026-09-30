import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import Contact from './pages/Contact.jsx';
function App() {
return (
<BrowserRouter>
<div className="bg-gray-100 min-h-screen">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</div>
</BrowserRouter>
);
}
export default App;