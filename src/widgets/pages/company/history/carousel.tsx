"use client"

import { cn } from "@/shared/lib/utils"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/shared/ui-kit/carousel/carousel"
import { useCallback, useEffect, useState } from "react"

type YearCarouselProps = {
	years: number[] | string[]
	onYearChange: (index: number) => void
}

export default function YearCarousel({ years, onYearChange }: YearCarouselProps) {
	const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
	const [selectedIndex, setSelectedIndex] = useState(0)

	const handleSelect = useCallback(() => {
		if (!carouselApi) return
		const index = carouselApi.selectedScrollSnap()
		setSelectedIndex(index)
		onYearChange(index)
	}, [carouselApi, onYearChange])

	useEffect(() => {
		if (!carouselApi) return
		handleSelect()
		carouselApi.on("select", handleSelect)

		return () => {
			carouselApi.off("select", handleSelect)
		}
	}, [carouselApi, handleSelect])

	return (
		<div className='relative flex justify-center items-center w-full overflow-hidden'>
			<div className='top-[calc(50%-8px)] left-1/2 absolute border rounded-full size-[184px] -translate-x-1/2 -translate-y-1/2'></div>

			<Carousel setApi={setCarouselApi}>
				<CarouselContent>
					{years.map((year, index) => (
						<CarouselItem className='z-20 relative' key={index}>
							<p
								className={cn(
									"text-9xl transition-colors duration-300 tracking-tighter leading-none",
									selectedIndex === index ? "text-accent" : "text-gray-color"
								)}
							>
								20{year}
							</p>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}
