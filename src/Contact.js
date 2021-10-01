import React from 'react';

export default function Contact() {
	return (
		<section className='bg-contact bg-cover object-fill w-screen h-[70vh] before:bg-yellow-900/50 before:absolute before:inset-0 before:z-0 z-0'>
			<form className='z-50 min-h-[50vh] w-[70vw] mx-auto my-auto flex flex-col '>
				<label>name</label>
				<input placeholder='enter your name' />
				<textarea id='massege' name='massege' rows='6'></textarea>
				<input type='submit' />
			</form>
		</section>
	);
}
