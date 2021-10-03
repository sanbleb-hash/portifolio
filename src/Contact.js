import React, { useState } from 'react';

export default function Contact() {
	const [value, setValue] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setValue(true);
	};
	return (
		<section className='bg-indigo-200 bg-cover object-fill w-screen h-[70vh] relative   z-0'>
			{/* <div className='before:bg-blue-400/60 w-900/50 before:absolute before:left-0 before:top-0 before:right-0 before:-bottom-10 before:z-1'></div> */}
			<form
				className='z-[100] min-h-[50vh] w-[50vw] mx-auto mt-8 px-6  py-8 mb-10 flex flex-col  border border-indigo-400  '
				onSubmit={handleSubmit}
			>
				{value ? (
					<span className='text-green-600 text-sm'>
						{' '}
						thanks for contacting us will reply ASAP{' '}
					</span>
				) : (
					''
				)}
				<div className=' flex flex-col'>
					<label className='italic font-bold text-xl capitalize'>name</label>
					<input
						onChange={(e) => setValue(e.target.value)}
						placeholder='enter your name'
						type='text'
						className='px-4 py-2 focus:outline-none'
					/>
				</div>
				<div className=' flex flex-col'>
					<label className='italic font-bold text-xl capitalize'>email</label>
					<input
						onChange={(e) => setValue(e.target.value)}
						placeholder='enter email'
						type='email'
						className='px-4 py-2 focus:outline-none'
					/>
				</div>
				<div className='flex items-end justify-between flex-col md:flex-row'>
					<textarea
						id='massege'
						name='massege'
						rows='4'
						className='my-3 
						mx-auto inline-block  flex-1 mr-7 focus:outline-none w-full
						p-7'
					></textarea>
					<input
						type='submit'
						className='inline-block md:w-1/4 w-full h-10 mb-4 active:hover:bg-blue-800  active:hover:text-white transition-all delay-75 ease-out 
						border
						border-gray-400
				'
					/>
				</div>
			</form>
		</section>
	);
}
