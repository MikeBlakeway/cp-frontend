import React from 'react'

export const Ricardo = () => {
	return (
		<div className='min-h-full'>
			<header className='bg-white h-28 px-6 shadow-md shadow-gray-300 sm:px-6'>
				<div className='py-2 flex justify-between items-center lg:max-w-7xl mx-auto'>
					<div className='w-9 flex-shrink-0 lg:flex lg:items-center lg:space-x-5 py-2 hover:cursor-pointer'>
						<img
							src='https://tailwindui.com/img/logos/workflow-mark-blue-600.svg'
							alt=''
							className=''
						/>
						<div className='hidden lg:block fle'>
							<ul className='flex space-x-10 flex-shrink-0 text-sm'>
								<li>
									<a href='/'>Dashboard</a>
								</li>
								<li>
									<a href='/'>Jobs</a>
								</li>
								<li>
									<a href='/'>Applicants</a>
								</li>
								<li>
									<a href='/'>Company</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='flex items-center'>
						<div
							className='lg:w-96   lg:mr-5 flex items-center p-1.5 px-5 rounded-md pr-24 bg-white text flex-shrink-0 border border-gray-300 shadow-sm  focus-within:ring-2 focus-within:ring-blue-600'
							tabindex='-1'
						>
							<span
								className='iconify mr-3 text-gray-400'
								data-icon='heroicons-solid:search'
								data-width='20'
							></span>
							<input
								type='text'
								placeholder='Search'
								className='font-light focus-within:outline-none text-gray-500'
							/>
						</div>
						<div className='hidden lg:block lg:flex lg:justify-end lg:items-center lg:space-x-2'>
							<div className='mr-3'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 text-gray-400 hover:text-gray-500 hover:cursor-pointer'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
									/>
								</svg>
							</div>
							<div className='w-8 hover:cursor-pointer'>
								<img src='./img/Twcss2_avatar.jpeg' alt='' className='rounded-full' />
							</div>
						</div>
					</div>
					<div className='lg:hidden hover:bg-gray-100 p-1 rounded-md'>
						<span
							className='iconify hover:cursor-pointer text-gray-400'
							data-icon='heroicons-outline:menu'
							data-width='25'
						></span>
					</div>
				</div>
				<div className='border-t border-gray-300 py-2 flex items-center lg:max-w-7xl mx-auto text-gray-500 text-base '>
					<div className='mr-3 sm:hidden hover:cursor-pointer hover:text-gray-900 flex'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 mr-3'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M7 16l-4-4m0 0l4-4m-4 4h18'
							/>
						</svg>
						<p>Back to applicants</p>
					</div>

					<div className='hidden sm:block'>
						<ul className='flex space-x-4 items-center'>
							<li className='hover:text-gray-700'>
								<a href='/'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
									</svg>
								</a>
							</li>
							<li>
								<img src='' alt='' />
							</li>
							<li className='hover:text-gray-700'>
								<a href='/'>Jobs</a>
							</li>
							<li>
								<img src='' alt='' />
							</li>
							<li className='hover:text-gray-700'>
								<a href='/'>Front End Developer</a>
							</li>
							<li>
								<img src='' alt='' />
							</li>
							<li className='hover:text-gray-700'>
								<a href='/'>Applicants</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<section className='px-6 md:flex md:items-center md:justify-between md:mx-24 md:space-x-20 md:items-center h-64 lg:h-36 lg:max-w-7xl lg:mx-auto '>
				<div className='flex items-center text-base space-x-5 py-8 md:mx-0 md:justify-between flex-shrink-0'>
					<div className='w-16 flex-shrink-0'>
						<img src='img/avatar.jpeg' alt='' className='rounded-full' />
					</div>
					<div>
						<p className='text-2xl font-bold'>Ricardo Cooper</p>
						<p className='text-gray-500 text-base'>
							Applied for{' '}
							<a href='/' className='text-gray-900'>
								Front End Developer{' '}
							</a>
							on August 25, 2020
						</p>
					</div>
				</div>
				<div className='text-center sm:flex sm:space-x-2 md:flex-row-reverse md:space-x-4 md:items-center'>
					<div className='flex-shrink-0 md:ml-3'>
						<button className='bg-blue-600 w-full sm:px-4 mb-4 md:mb-0  text-white py-2 rounded-md font-normal text-sm hover:bg-blue-700 shadow'>
							Advance to offer
						</button>
					</div>
					<div className='flex-shrink-0'>
						<button className='bg-white w-full sm:px-4 text-sm py-2 rounded-md font-normal hover:bg-gray-50 border border-gray-300 shadow-sm'>
							Disqualify
						</button>
					</div>
				</div>
			</section>
			<main className='lg:grid-cols-3 lg:grid lg:mx-8 justify-start gap-7 lg:px-0 lg:max-w-7xl lg:mx-auto'>
				<div className='mb-5 lg:col-span-2' id='main-1'>
					<section className='bg-white lg:mx-0 text-left sm:mx-6 sm:rounded-md leading-7 border border-gray-200 shadow-sm shadow-gray-300 mb-5'>
						<div className='border-b border-gray-300 px-6 py-4'>
							<h3 className='font-medium text-lg'>Applicant Information</h3>
							<p className='text-gray-400 font-light text-sm'>
								Personal details and application
							</p>
						</div>
						<div className='px-6 text-sm'>
							<div className='sm:flex justify-between'>
								<div className='py-4'>
									<h4 className='text-base font-light text-gray-500'>Application for</h4>
									<p className='font-light'>Backend Developer</p>
								</div>
								<div className='py-4 sm:w-2/4'>
									<h4 className='text-base font-light text-gray-500'>Email address</h4>
									<p className='font-light'>ricardocooper@example.com</p>
								</div>
							</div>
							<div className='sm:flex justify-between'>
								<div className='py-4'>
									<h4 className='text-base font-light text-gray-500'>
										Salary expectation
									</h4>
									<p className='font-light'>$120,000</p>
								</div>
								<div className='py-4 sm:w-2/4'>
									<h4 className='text-base font-light text-gray-500'>Phone</h4>
									<p className='font-light'>+1 555-555-5555</p>
								</div>
							</div>
							<div className='py-4'>
								<h4 className='text-base font-light text-gray-500'>About</h4>
								<p className='font-light leading-6'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
									nostrum consequuntur et. Repellat, in rem quis quibusdam non minus
									doloremque laboriosam reiciendis perferendis sapiente obcaecati
									cupiditate sed voluptatibus? Accusantium, maxime?
								</p>
							</div>
							<div className='py-4'>
								<h4 className='text-sm font-normal text-gray-500'>Attachements</h4>
								<div className='border border-gray-200 rounded-md'>
									<div className='flex justify-between p-2'>
										<div className='flex items-center'>
											<div className='flex items-center'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-5 w-5 text-gray-400 mx-1'
													viewBox='0 0 20 20'
													fill='currentColor'
												>
													<path
														fill-rule='evenodd'
														d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
														clip-rule='evenodd'
													/>
												</svg>
												<span className='font-light text-sm'>
													resume_front_end_developer.pdf
												</span>
											</div>
										</div>
										<div>
											<a
												href='/'
												className='mr-3 text-sm text-blue-500 hover:text-blue-400'
											>
												Download{' '}
											</a>
										</div>
									</div>
									<div className='flex justify-between border-t border-gray-300 p-2'>
										<div className='flex items-center'>
											<div className='flex items-center'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-5 w-5 text-gray-400 mx-1'
													viewBox='0 0 20 20'
													fill='currentColor'
												>
													<path
														fill-rule='evenodd'
														d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
														clip-rule='evenodd'
													/>
												</svg>
												<span className='font-light text-sm'>
													resume_front_end_developer.pdf
												</span>
											</div>
										</div>
										<div>
											<a
												href='/'
												className='mr-3 text-sm text-blue-500 hover:text-blue-400'
											>
												Download{' '}
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='bg-gray-50 text-center p-1.5 rounded-b-md'>
							<a href='/' className='text-gray-500 text-sm hover:text-gray-800'>
								Read full application
							</a>
						</div>
					</section>
					<section className='bg-white text-left sm:mx-6 lg:mx-0 rounded-md leading-7 shadow-sm shadow-gray-300 border border-gray-00 shadow-sm shadow-gray-300'>
						<div className='border-b border-gray-200 px-6 py-4'>
							<h1 className='text-lg font-medium'>Notes</h1>
						</div>
						<div className='flex px-6 py-4'>
							<div className='w-10 flex-shrink-0 mr-2'>
								<img src='img/avatar.jpeg' alt='' className='rounded-full' />
							</div>
							<div className='text-sm -mt-1'>
								<h5 className='mb-1'>Leslie Alexander</h5>
								<p className='text-gray-500 font-light mb-1'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat modi
									vero repellat. Quae, mollitia voluptatem corporis maxime dignissimos
									distinctio, totam tempore quibusdam ab laborum error impedit
									perspiciatis vitae nesciunt repellendus!
								</p>
								<span className='flex items-center space-x-3'>
									<p className='text-gray-500'>4d ago </p>{' '}
									<span className='text-gray-500'>&middot;</span> <a href='/'>Reply</a>
								</span>
							</div>
						</div>
						<div className='flex px-6 py-4'>
							<div className='w-10 flex-shrink-0 mr-2'>
								<img src='img/avatar.jpeg' alt='' className='rounded-full' />
							</div>
							<div className='text-sm -mt-1'>
								<h5 className='mb-1'>Leslie Alexander</h5>
								<p className='text-gray-500 font-light mb-1'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat modi
									vero repellat. Quae, mollitia voluptatem corporis maxime dignissimos
									distinctio, totam tempore quibusdam ab laborum error impedit
									perspiciatis vitae nesciunt repellendus!
								</p>
								<span className='flex items-center space-x-3'>
									<p className='text-gray-500'>4d ago </p>{' '}
									<span className='text-gray-500'>&middot;</span> <a href='/'>Reply</a>
								</span>
							</div>
						</div>
						<div className='flex px-6 py-4'>
							<div className='w-10 flex-shrink-0 mr-2'>
								<img src='img/avatar.jpeg' alt='' className='rounded-full' />
							</div>
							<div className='text-sm -mt-1'>
								<h5 className='mb-1'>Leslie Alexander</h5>
								<p className='text-gray-500 font-light mb-1'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat modi
									vero repellat. Quae, mollitia voluptatem corporis maxime dignissimos
									distinctio, totam tempore quibusdam ab laborum error impedit
									perspiciatis vitae nesciunt repellendus!
								</p>
								<span className='flex items-center space-x-3'>
									<p className='text-gray-500'>4d ago </p>{' '}
									<span className='text-gray-500'>&middot;</span> <a href='/'>Reply</a>
								</span>
							</div>
						</div>
						<div className='flex px-6 py-6 bg-gray-50 rounded-b-md'>
							<div className='w-10 flex-shrink-0 mr-2'>
								<img src='img/avatar.jpeg' alt='' className='rounded-full' />
							</div>
							<div className='w-full'>
								<div className='text-sm -mt-1'>
									<textarea
										className='bg-white w-full rounded-md border shadow-sm shadow-gray-300 p-2 text-gray-900 font-light text-base'
										name=''
										id=''
										cols=''
										rows='3'
										placeholder='Add a note'
									></textarea>
								</div>
								<div className='flex justify-between py-2 text-gray-400 font-light items-center'>
									<a href='/' className='hover:text-gray-700'>
										<div className='flex items-center space-x-2'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-5 w-5'
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path
													fill-rule='evenodd'
													d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
													clip-rule='evenodd'
												/>
											</svg>
											<p>Some HTML is okay.</p>
										</div>
									</a>
									<div>
										<button className='font-light px-5 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
											Comment
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className='text-left' id='main-2'>
					<section className='sm:mx-6 lg:mx-0 text-sm sm:rounded-md leading-7 shadow-sm shadow-gray-300 bg-white px-6 py-4 mb-5 lg:mb-0 border border-gray-200 lg:m-0 lg:flex-shrink-0 min-w-[400px]'>
						<div className=''>
							<div className='mb-3 lg:mb-6'>
								<p className='text-lg'>Timeline</p>
							</div>
							<div className='font-light text-gray-700 mb-3'>
								<ul className='relative mb-10'>
									<li className='flex justify-between items-center pb-5 relative'>
										<div className='z-30 rounded-full ring-8 ring-white ring-inset'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-10 w-10 text-gray-400 z-30'
												viewBox='0 0 20 20'
												fill='currentColor'
												tabindex='-1'
											>
												<path
													fill-rule='evenodd'
													d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
													clip-rule='evenodd'
												/>
											</svg>
										</div>
										<div className='flex justify-between w-full'>
											<p className='mx-2'>
												Applied to{' '}
												<span className='text-gray-900 font-normal'>
													Front End Developer
												</span>
											</p>
											<p>20 sep</p>
										</div>
										<div className='w-0.5 bg-gray-200 h-10 absolute top-10 left-5 -ml-px z-10'>
											&#160;
										</div>
									</li>
									<li className='flex justify-between items-center relative  pb-7 '>
										<div
											className='bg-blue-500 rounded-full p-1.5 ml-1 ring-4 ring-white z-30'
											tabindex='-1'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-5 w-5 text-white'
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' />
											</svg>
										</div>
										<div className='flex justify-between w-full'>
											<p className='mx-3 leading-5'>
												Advanced to phone screening by{' '}
												<span className='text-gray-900 font-normal'>Bethany Blake</span>
											</p>
											<p className='flex-shrink-0 leading-5'>22 sep</p>
										</div>
										<div className='w-0.5 bg-gray-200 h-12 absolute top-8 left-5 -ml-px z-10'>
											&#160;
										</div>
									</li>

									<li className='flex justify-between relative items-center pb-6 pt-1'>
										<div className='rounded-full ring-white ring-8 z-30 ring-inset'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-10 w-10 text-green-500'
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path
													fill-rule='evenodd'
													d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
													clip-rule='evenodd'
												/>
											</svg>
										</div>
										<div className='flex justify-between w-full'>
											<p className='mx-3 leading-5'>
												Advanced to phone screening with{' '}
												<span className='text-gray-900 font-normal'>Martha Gardner</span>
											</p>
											<p className='flex-shrink-0 leading-5'>28 sep</p>
										</div>
										<div className='w-0.5 bg-gray-200 h-12 absolute top-8 left-5 -ml-px z-10'>
											&#160;
										</div>
									</li>

									<li className='flex justify-between relative items-center pb-5 pt-1'>
										<div
											className='bg-blue-500 rounded-full p-1.5 ml-1 ring-4 ring-white z-30'
											tabindex='-1'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-5 w-5 text-white'
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' />
											</svg>
										</div>
										<div className='flex justify-between w-full'>
											<p className='mx-3 leading-5'>
												Advanced to interview by{' '}
												<span className='text-gray-900 font-normal'>Bethany Blake</span>
											</p>
											<p className='flex-shrink-0 leading-5'>30 sep</p>
										</div>
										<div className='w-0.5 bg-gray-200 h-12 absolute top-8 left-5 -ml-px z-10'>
											&#160;
										</div>
									</li>

									<li className='flex justify-between relative items-center pb-1 pt-1'>
										<div className='rounded-full ring-white ring-8 z-30 ring-inset'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-10 w-10 text-green-500'
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path
													fill-rule='evenodd'
													d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
													clip-rule='evenodd'
												/>
											</svg>
										</div>
										<div className='flex justify-between w-full'>
											<p className='mx-3 leading-5'>
												Completed interview with{' '}
												<span className='text-gray-900 font-normal'>Katherine Snyder</span>
											</p>
											<p className='flex-shrink-0 leading-5'>22 sep</p>
										</div>
									</li>
								</ul>
							</div>
							<div className=''>
								<button className='bg-blue-600 w-full text-white rounded-md py-1 font-light hover:bg-blue-700'>
									Advance to offer
								</button>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}
