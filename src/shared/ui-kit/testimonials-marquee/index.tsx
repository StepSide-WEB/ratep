import React from "react"
import Marquee from "react-fast-marquee"
import BelarusRw from "../icons/logos/belarus-rw"
import Bmz from "../icons/logos/bmz"
import Metrovagonmash from "../icons/logos/metrovagonmash"
import Moscowmetro from "../icons/logos/moscowmetro"
import RussianRw from "../icons/logos/russian-rw"
import Sinara from "../icons/logos/sinara"
import Tmx from "../icons/logos/tmx"
import { cn } from "@/shared/lib/utils"

const TestimonialsMarquee = ({ className, gradientWidth }: { className?: string; gradientWidth?: number }) => {
	return (
		<div className={cn("max-w-[400px] md:max-w-[750px]", className)}>
			<Marquee
				className='flex gap-x-6 sm:gap-x-12'
				gradient
				gradientColor='white'
				gradientWidth={gradientWidth || 0}
				speed={30}
			>
				<div className='flex items-center gap-x-10'>
					<BelarusRw />
					<Bmz />
					<Metrovagonmash />
					<Moscowmetro />
					<RussianRw />
					<Sinara />
					<Tmx />
				</div>
			</Marquee>
		</div>
	)
}

export default TestimonialsMarquee
