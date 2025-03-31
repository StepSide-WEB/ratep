"use client"
import { useState, useEffect } from "react"
import usePageLoaded from "@/shared/hooks/use-loading"
import Svg from "./svg"
import { cn } from "@/shared/lib/utils"

const PagePreloader = () => {
	const isPageLoaded = usePageLoaded()
	const [isHidden, setIsHidden] = useState(false)

	useEffect(() => {
		document.body.style.overflow = "hidden"
		if (isPageLoaded) {
			const timer = setTimeout(() => {
				setIsHidden(true)
				document.body.style.overflow = "auto"
			}, 2000)
			return () => {
				clearTimeout(timer)
				document.body.style.overflow = "auto"
			}
		}
		return () => {
			document.body.style.overflow = "auto"
		}
	}, [isPageLoaded])

	return (
		<div
			className={cn(
				"z-50 fixed inset-0 flex justify-center items-center w-full h-full",
				isHidden && "pointer-events-none"
			)}
		>
			<Svg isPageLoaded={isPageLoaded} isHidden={isHidden} />
			<div
				className={cn(
					"w-full h-full bg-[#192228] absolute transition-transform duration-700",
					isHidden ? "-translate-y-full" : "translate-y-0"
				)}
			></div>
		</div>
	)
}

export default PagePreloader
