import React from 'react';
import { About } from './components/About';

const Portfolio = () => {
	return (
		<section className=' w-[80vw] mx-auto min-h-[60vh]'>
			<About></About>
			<section className='mt-20 text-lg'>projects</section>
		</section>
	);
};

export default Portfolio;
