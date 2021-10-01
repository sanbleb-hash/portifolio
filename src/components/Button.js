import React from 'react';

const Button = ({ children }) => {
	return (
		<button
			className='bg-blue-800 hover:bg-opacity-80
						hover:text-white block text-lg px-9 text-indigo-100 py-1 absolute bottom-0 left-0 
                        md:mt-8 lg:mt-0
                        '
		>
			{children}
		</button>
	);
};

export default Button;
