import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

const Contact = () => {
	const router = useNavigate();

	const [loading, setLoading] = useState(false);
	const form = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (form.current === '') {
			toast.error('pliz fill all fields');
			return;
		}
		const clearForm = (e) => {
			form.current = '';
		};
		setLoading(true);

		emailjs
			.sendForm(
				'service_gqjjyow',
				'template_m1paocj',
				form.current,

				'user_G7opxnY8fCjEMJBR8FhIB'
			)
			.then(
				(result) => {
					setLoading(false);
					toast.success(result.text);
				},
				(error) => {
					toast.error(error.text);
				}
			);
		clearForm();
		setTimeout(() => {
			router.push('/thank-you');
		}, 5000);
	};

	return (
		<div className='pt-14 flex flex-col items-center  justify-center min-h-[80vh] bg-slate-100   '>
			<form
				ref={form}
				className='min-w-[300px] bg-slate-100 '
				onSubmit={handleSubmit}
			>
				<div className=' flex-col flex justfy-start text-gray-700'>
					<label>Name</label>
					<input
						className=' shadow-lg bg-gray-100 ring-0 border-0 rounded-lg focus:ring-0 focus:border-0 '
						type='text'
						name='user_name'
					/>
				</div>
				<div className=' flex-col flex justfy-start text-gray-700'>
					<label>subject</label>
					<input
						className=' shadow-lg bg-gray-100 ring-0 border-0 rounded-lg focus:ring-0 focus:border-0 '
						type='text'
						name='user_subject'
					/>
				</div>
				<div className='  flex-col flex justfy-start text-gray-700'>
					<label>Email</label>
					<input
						className=' shadow-lg bg-gray-100 ring-0 border-0 rounded-lg focus:ring-0 focus:border-0 '
						type='email'
						name='user_email'
					/>
				</div>
				<div className=' flex-col flex justfy-start text-gray-700'>
					<label>Message</label>
					<textarea
						className=' shadow-lg bg-gray-100 ring-0 border-0 rounded-lg focus:ring-0 focus:border-0 '
						name='message'
					/>
				</div>
				<input
					type='submit'
					value={loading ? 'sending ..' : 'Send'}
					className='px-10 py-2 bg-green-500 mt-3 text-white  '
				/>
			</form>
		</div>
	);
};

export default Contact;
