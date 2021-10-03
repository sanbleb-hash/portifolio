import React from 'react';
import { Link } from 'react-router-dom';

const NotfoundPage = () => {
	return (
		<div className='text-blue-800 text-center min-h-[60vh] flex justify-center items-center '>
			sorry the page you request is not up and running please
			<span className='text-blue-500 underline hover:text-blue-700 '>
				<Link to='/'>go back</Link>
			</span>
			keep in touch
		</div>
	);
};

export default NotfoundPage;
