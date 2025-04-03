import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"
import s from "./index.module.scss"

interface ButtonPrimaryProps extends HTMLAttributes<HTMLButtonElement> {
	isActive?: boolean
}

const ButtonPrimary = ({ className, isActive, children }: ButtonPrimaryProps) => {
	return (
		<button
			className={cn(
				"p-[18px] xl:px-6 xl:py-[22px] gap-x-2 transition duration-200 flex items-center justify-center whitespace-nowrap",
				s.ButtonPrimary,
				isActive && s.Active,
				className
			)}
		>
			{children}
		</button>
	)
}

export default ButtonPrimary
