import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
	outline?: boolean
}

const Badge = ({ className, children, outline, ...props }: BadgeProps) => {
	return (
		<div
			className={cn(
				"font-medium text-sm px-[10px] py-[5px] rounded-full h-fit",
				outline ? "border text-black-60 whitespace-nowrap text-[10px] sm:text-sm" : "bg-accent-10 text-accent",
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Badge
