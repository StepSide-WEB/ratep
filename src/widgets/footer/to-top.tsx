"use client"
import ArrowDown from "@/shared/ui-kit/icons/arrow-down"

const ToTop = () => {
	return (
		<button
			onClick={() => {
				window.scrollTo({ top: 0, behavior: "smooth" })
			}}
			className='hidden 2md:flex justify-center items-center bg-[#F8F8F9] hover:bg-[#00122E] [&>*]:hover:stroke-white [&>*]:stroke-[#00122E] rounded-full size-11 transition duration-200 cursor-pointer'
		>
			<ArrowDown className='size-4 rotate-180' />
		</button>
	)
}

export default ToTop
