import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { data } from '../data';

const SlideMenu = ({ setIsMobile }) => {
	const route = useHistory();

	return (
		<nav className='w-full  text-blue-800 absolute inset-0  '>
			<span
				className='text-2xl inline-block  mt-3 mb-8 hover:shadow-lg hover:scale-125 p-2 hover:bg-transparent hover:opacity-80 ml-[450px]  '
				onClick={() => setIsMobile(true)}
			>
				<FaTimes />
			</span>
			<ul className='flex md:hidden flex-col   items-center justify-center mb-10 bg-blue-300 p-7 '>
				{data.navigation.map((item, i) => (
					<li
						key={i}
						className='  mt-10							 font-semibold capitalize cursor-pointer  '
					>
						<h3
							onClick={function () {
								setIsMobile(true);
								route.push(item.url);
							}}
							className='hover:opacity-70 hover:border-b-2
						
					
								 hover:pb-4 transition-all 
							delay-75 ease-in-out'
						>
							{item.title}
						</h3>
					</li>
				))}

				<div className='mt-40 flex '>
					{data.socialMedia.map((icon, i) => (
						<span
							key={i}
							className=' inline-block mx-10  items-center justify-between hover:p-2
                            hover:transform 
                            hover:skew-y-12 
                            hover:rounded-md hover:bg-blue-800 hover:text-indigo-50
                            hover:shadow-lg
                            hover:transition-all 
                             delay-75 ease-out cursor-pointer'
						>
							{icon.icons}
						</span>
					))}
				</div>
			</ul>
		</nav>
	);
};

export default SlideMenu;
