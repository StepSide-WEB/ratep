import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"

const Heading = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<h2
			className={cn(
				"text-[32px] leading-[1] sm:text-6xl sm:leading-[1] 2md:text-7xl 2md:leading-[0.9] lg:text-[80px] lg:leading-[0.9] xl:text-[100px] xl:leading-[0.85] tracking-[-0.04em]",
				className
			)}
			{...props}
		>
			{children}
		</h2>
	)
}

export default Heading
