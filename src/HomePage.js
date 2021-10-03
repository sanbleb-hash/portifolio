import React from 'react';
import { About } from './components/About';
import Button from './components/Button';

const HomePage = () => {
	return (
		<main className='min-h-[100vh] mx-auto bg-gray-100 w-[80vw] pt-[10vh] z-0 '>
			<section className='h-[60vh] w-full bg-hero relative bg-cover object-fill md:grid md:grid-cols-3 '>
				<article
					className=' text-gray-700  bg-white max-h-[3/4] absolute md:bottom-0 md:left-0 md:py-6 md:px-8
					
					md:max-h-[30vh]
					md:max-w-[40vw]
					 text-3xl font-medium 
				bottom-[-300px] w-full h-[50vh] text-center pt-20
				
				'
				>
					<h2>
						hie, I'm Blessings Butao
						<span className='block md:py-1 py-4'>
							a front end web developer
						</span>
						<Button>about me</Button>
					</h2>
				</article>
			</section>
			<section className='mt-80 md:mt-0'>
				<About />
			</section>
		</main>
	);
};

export default HomePage;
