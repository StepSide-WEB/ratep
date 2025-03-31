import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"

const Badge = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className={cn("font-medium text-sm text-accent px-[10px] py-[5px] bg-accent-10 rounded-full", className)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Badge
