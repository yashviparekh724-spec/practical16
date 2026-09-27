import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
return (
<nav className="bg-slate-800 text-white p-4 shadow-md">
<div className="max-w-4xl mx-auto flex justify-between
items-center">
<h1 className="text-lg font-bold text-sky-400">TechCorp
Solutions</h1>
<div className="space-x-4 text-sm">
<Link to="/" className="hover:text-sky-300">Home</Link>

<Link to="/about" className="hover:text-sky-300">About
Us</Link>
<Link to="/contact"
className="hover:text-sky-300">Contact</Link>
</div>
</div>
</nav>
);
}
export default Navbar;