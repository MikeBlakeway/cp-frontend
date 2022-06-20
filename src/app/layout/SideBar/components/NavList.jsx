import React from 'react'

export const NavList = () => {
	return (
		<ul className='space-y-2 pb-2'>
			<li>
				<a
					href='/'
					className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'
				>
					<svg
						className='w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
						<path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
					</svg>
					<span className='ml-3'>Dashboard</span>
				</a>
			</li>
			<li>
				<a
					href='/kanban'
					className='text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group '
				>
					<svg
						className='w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
					</svg>
					<span className='ml-3 flex-1 whitespace-nowrap'>Kanban</span>
				</a>
			</li>
			<li>
				<a
					href='/mailing'
					className='text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group '
				>
					<svg
						className='w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
						<path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
					</svg>
					<span className='ml-3 flex-1 whitespace-nowrap'>Inbox</span>
				</a>
			</li>
			<li>
				<a
					href='/users/list'
					className='text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group '
				>
					<svg
						className='w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
							clipRule='evenodd'
						></path>
					</svg>
					<span className='ml-3 flex-1 whitespace-nowrap'>Users</span>
				</a>
			</li>
			<li>
				<a
					href='/e-commerce/products'
					className='text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group '
				>
					<svg
						className='w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
							clipRule='evenodd'
						></path>
					</svg>
					<span className='ml-3 flex-1 whitespace-nowrap'>Products</span>
				</a>
			</li>
			<li>
				<a
					href='/authentication/sign-in'
					className='text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group '
				>
					<svg
						className='w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
							clipRule='evenodd'
						></path>
					</svg>
					<span className='ml-3 flex-1 whitespace-nowrap'>Sign In</span>
				</a>
			</li>
			<li>
				<a
					href='/authentication/sign-up'
					className='text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group '
				>
					<svg
						className='w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
							clipRule='evenodd'
						></path>
					</svg>
					<span className='ml-3 flex-1 whitespace-nowrap'>Sign Up</span>
				</a>
			</li>
		</ul>
	)
}
