import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"
import s from "./index.module.scss"

interface ButtonPrimaryProps extends HTMLAttributes<HTMLButtonElement> {
	isActive?: boolean
	isOutline?: boolean
}

const ButtonPrimary = ({ className, isOutline, isActive, children, ...props }: ButtonPrimaryProps) => {
	return (
		<button
			className={cn(
				"px-4 py-5 gap-x-2 transition duration-200 flex items-center justify-center whitespace-nowrap",
				isOutline && "border",
				s.ButtonPrimary,
				isActive && s.Active,
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

export default ButtonPrimary
