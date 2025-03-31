import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"

const Heading = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<h2
			className={cn(
				"text-[32px] sm:text-6xl 2md:text-7xl lg:text-[80px] xl:text-[100px] text-center leading-[.85] tracking-[-0.04]",
				className
			)}
			{...props}
		>
			{children}
		</h2>
	)
}

export default Heading
