import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';
import { FaBars, FaTimes } from 'react-icons/fa';
import SlideMenu from './SlideMenu';

const NavBar = () => {
	const [isMobile, setIsMobile] = useState(true);

	return (
		<nav className=' h-[10vh] relative !text-blue-900  w-screen z-50  '>
			<div
				className=' h-[10vh] 
			px-2 md:bg-gray-400/70 fixed !text-blue-900 mx-[10vw] w-[80vw] flex items-center justify-between   '
			>
				<h1 className='text-xl font-semibold hover:opacity-70 hover:border-b-2 hover:pb-4 transition-all delay-75 ease-in-out  '>
					<Link to='/'>
						nino
						<span className='text-indigo-900 font-medium font-ephisis text-3xl '>
							Multmedia
						</span>
					</Link>
				</h1>
				<ul className='flex'>
					<section className='flex md:hidden'>
						{isMobile ? (
							<span
								className='md:hidden text-xl text-gray-600 cursor-pointer '
								onClick={() => setIsMobile(!isMobile)}
							>
								<FaBars />
							</span>
						) : (
							(
								<span
									className='text-2xl inline-block 
								text-black
								text-center
								self-end  m-10 hover:shadow-lg hover:scale-125 p-2 hover:bg-transparent hover:opacity-80 hover:   '
									onClick={() => setIsMobile(isMobile)}
								>
									<FaTimes />
								</span>
							) && <SlideMenu setIsMobile={setIsMobile} isMobile={isMobile} />
						)}
					</section>

					{data.navigation.map((item, i) => (
						<li
							key={i}
							className=' hidden md:block ml-3
							 font-semibold capitalize  '
						>
							<Link
								to={item.url}
								className='hover:opacity-70 hover:border-b-2
						
					
								 hover:pb-4 transition-all 
							delay-75 ease-in-out'
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
