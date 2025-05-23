const Train = ({ className }: { className?: string }) => {
	return (
		<svg
			className={className}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				className='transition'
				d='M8 3.09961V6.99961C8 8.06048 8.42143 9.07789 9.17157 9.82804C9.92172 10.5782 10.9391 10.9996 12 10.9996C13.0609 10.9996 14.0783 10.5782 14.8284 9.82804C15.5786 9.07789 16 8.06048 16 6.99961V3.09961'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path className='transition' d='M9 15L8 14' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
			<path className='transition' d='M15 15L16 14' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
			<path
				className='transition'
				d='M9 19C6.2 19 4 16.8 4 14V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V14C20 16.8 17.8 19 15 19H9Z'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path className='transition' d='M8 19L6 22' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
			<path className='transition' d='M16 19L18 22' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
}

export default Train
