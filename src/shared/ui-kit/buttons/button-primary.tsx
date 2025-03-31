import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"
import s from "./index.module.scss"

const ButtonPrimary = ({ className, children }: HTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={cn(
				"px-6 py-[22px] gap-x-2 transition duration-200 flex items-center justify-center whitespace-nowrap",
				s.ButtonPrimary,
				className
			)}
		>
			{children}
		</button>
	)
}

export default ButtonPrimary
