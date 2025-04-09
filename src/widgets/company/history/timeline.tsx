import { cn } from "@/shared/lib/utils"
import React, { forwardRef } from "react"

interface TimelineProps {
	years: number[] | string[]
	activeIndex: number
}

const Timeline = forwardRef<HTMLDivElement, TimelineProps>(({ years, activeIndex }, ref) => {
	return (
		<div
			ref={ref}
			className='hidden xl:block bottom-0 z-50 fixed w-full transition-transform translate-y-full duration-300'
		>
			<div className='bg-white pt-5 pb-7 border-t w-full'>
				<div className='relative flex justify-center items-center gap-10'>
					{years.map((year, index) => (
						<div key={index} className='relative flex flex-col items-center'>
							<div
								className={cn(
									"text-sm font-medium duration-300 transition-colors",
									activeIndex >= index ? "text-accent" : "text-[#F1F1F2]"
								)}
							>
								20{year}
							</div>
							<div className='flex'>
								<div
									className={cn(
										"size-[10px] mt-2 rounded-full relative z-20 duration-300 transition-colors",
										activeIndex >= index ? "bg-accent" : "bg-[#F1F1F2]"
									)}
								></div>
								<div
									className={cn(
										"top-[calc(100%-6px)] -left-[53px] absolute w-[68px] rounded-sm h-0.5 duration-300 transition-colors",
										activeIndex >= index ? "bg-accent" : "bg-black-10"
									)}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
})

Timeline.displayName = "Timeline"

export default Timeline
