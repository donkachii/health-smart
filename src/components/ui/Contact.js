'use client';
import { useState } from 'react';
import Image from 'next/image';
import contact from '../../../public/assets/contact.svg';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Handle form submission, e.g., sending data to an API or backend server
		console.log('Form data submitted:', formData);
	};

	return (
		<div className='max-w-5xl mx-auto mt-20 px-4' id='contact'>
			<h2 className='text-3xl font-bold mb-12 text-center text-blue-800'>Contact Us</h2>
			<div className='grid lg:grid-cols-2 gap-8 items-center'>
				{/* Form Section */}
				<div className='bg-white p-8 rounded-lg'>
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='name'>
								Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								required
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='email'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								required
							/>
						</div>
						<div className='mb-6'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='message'>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								rows='5'
								required></textarea>
						</div>
						<div className='text-center'>
							<button
								type='submit'
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
								Send Message
							</button>
						</div>
					</form>
				</div>
				{/* Image Section */}
				<div className='flex justify-center items-center'>
					<Image src={contact} alt='Contact Us' width={300} height={300} />
				</div>
			</div>
		</div>
	);
};

export default Contact;
