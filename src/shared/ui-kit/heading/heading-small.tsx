import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"

const HeadingSmall = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<h2
			className={cn(
				"text-2xl leading-[1] sm:text-3xl sm:leading-[1] 2md:text-4xl 2md:leading-[0.9] lg:text-5xl lg:leading-[0.9] xl:text-[56px] xl:leading-[0.85] tracking-[-0.03em]",
				className
			)}
			{...props}
		>
			{children}
		</h2>
	)
}

export default HeadingSmall
