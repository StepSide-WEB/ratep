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

const logos = [BelarusRw, Bmz, Metrovagonmash, Moscowmetro, RussianRw, Sinara, Tmx]

const TestimonialsMarquee = ({
	className,
	gradientWidth = 0,
	huge,
}: {
	className?: string
	gradientWidth?: number
	huge?: boolean
}) => {
	return (
		<div className={cn(!huge ? "max-w-[400px] md:max-w-[750px]" : "border-b border-t", className)}>
			<Marquee
				className={cn("flex", !huge && "gap-x-6 sm:gap-x-12")}
				gradient
				gradientColor='white'
				gradientWidth={gradientWidth}
				speed={30}
			>
				<div className={cn("flex items-center", !huge && "gap-x-10")}>
					{logos.map((Logo, index) => (
						<div key={index} className={cn(huge && "size-48 sm:size-72 flex items-center justify-center border-r")}>
							<Logo className={cn(huge && "size-20 sm:size-32")} />
						</div>
					))}
				</div>
			</Marquee>
		</div>
	)
}

export default TestimonialsMarquee
