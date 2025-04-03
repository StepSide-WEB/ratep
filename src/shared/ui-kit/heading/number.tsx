import { cn } from "@/shared/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

const NumberHeading = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, children, ...props }, ref) => {
		return (
			<p
				ref={ref}
				className={cn(
					"text-[80px] 3xs:text-[96px] md:text-[100px] lg:text-[120px] xl:text-[160px] leading-[.85] whitespace-nowrap transition-colors w-full tracking-[-0.04em]",
					className
				)}
				{...props}
			>
				{children}
			</p>
		)
	}
)

NumberHeading.displayName = "NumberHeading" // Нужно для корректной работы с React DevTools

export default NumberHeading
