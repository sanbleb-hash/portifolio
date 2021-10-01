import React from 'react';

const Footer = () => {
	const today = new Date();

	return (
		<footer className=' min-h-[10vh] w-screen bg-gray-400 text-white text-center py-10 mt-10'>
			&copy; @ninoMultmedia {today.getFullYear()}
		</footer>
	);
};

export default Footer;
