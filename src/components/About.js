import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export const About = () => {
	const router = useNavigate();
	return (
		<section className='  md:mt-10'>
			<div className=' flex flex-col md:grid md:grid-cols-2'>
				<div className='flex-1 rounded-lg'>
					<img
						src='https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg'
						alt='programmer'
						className='h-full w-full rounded-lg'
					/>
				</div>
				<article className='relative ml-7 pr7 text-left text-gray-700 flex-1  flex justify-between flex-col'>
					<h1 className=' font-semibold text-2xl pb-5'>about me</h1>
					<p className=' mb-11 md:mb-0 '>
						I am an junior freelancing front-end web developer, experienced
						writting accessible css and clean javascript. looking for a junior
						developer role in any capacity I ussually write my code in react
						along with Next js, comfotable with redux and contextAPI but not l
						locked out of other technologies as I adapt quicky ,am currently
						immensing my self in more backend stuf with node to become a
						full-stack developer
					</p>
					<div className='md:mt-10 lg:mt-1'>
						<Button>
							<h5 onClick={() => router.push('/portfolio')}>
								see my portfolio
							</h5>
						</Button>
					</div>
				</article>
			</div>
		</section>
	);
};
