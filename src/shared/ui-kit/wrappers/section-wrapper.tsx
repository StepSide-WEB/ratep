import { HTMLAttributes } from "react"
import { cn } from "@/shared/lib/utils"

const SectionWrapper = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<section className={cn("px-4 sm:px-6", className)} {...props}>
			{children}
		</section>
	)
}

export default SectionWrapper
