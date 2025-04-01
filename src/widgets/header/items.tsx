"use client"
import { cn } from "@/shared/lib/utils"
import s from "./index.module.scss"
import { Link } from "react-transition-progress/next"
import { useState } from "react"
import ArrowDown from "@/shared/ui-kit/icons/arrow-down"
import { menuItems } from "./constants"

const Items = ({ className }: { className?: string }) => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)

	const toggleDropdown = (menu: string) => {
		setOpenDropdown(openDropdown === menu ? null : menu)
	}

	return (
		<ul className={cn("items-center bg-white", s.List, className)}>
			{menuItems.map(({ key, label, links }) => (
				<li className='z-10 relative bg-white' key={key}>
					<Link
						onClick={() => toggleDropdown(key)}
						className={cn("px-6 py-5", openDropdown === key && s.Open)}
						href='#'
					>
						<span>{label}</span>
						<ArrowDown className={cn("xl:hidden", openDropdown === key && "rotate-180 transition")} />
					</Link>
					<div className={cn(s.Dropdown, openDropdown === key && s.Open)}>
						<div className={s.Content}>
							{links.map((link) => (
								<Link className='z-20 relative bg-white' key={link} href='#'>
									{link}
								</Link>
							))}
						</div>
						<div
							className={cn(
								"top-0 left-0 -z-20 fixed pointer-events-none bg-[#00122E1A] opacity-0 transition duration-300 delay-150 backdrop-blur-md w-full h-[100svh]",
								s.Overlay
							)}
						></div>
					</div>
				</li>
			))}
			<li className='bg-white'>
				<Link className='px-6 py-5' href='#'>
					Контакты
				</Link>
			</li>
		</ul>
	)
}

export default Items
