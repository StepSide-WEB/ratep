import { cn } from "@/shared/lib/utils"
import ArrowUpRight from "../icons/arrow-up-right"
import s from "./index.module.scss"
import { Link } from "react-transition-progress/next"

interface ServiceCardProps {
	Icon: React.ElementType
	border?: boolean
	children: React.ReactNode
	link?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, border, children, link }) => {
	return (
		<Link
			href={link || ""}
			className={cn(
				"flex flex-col justify-between p-4 sm:p-6 w-full h-full",
				border && "sm:border-r border-b sm:border-b-0",
				s.Card,
				s.WithoutSVG
			)}
		>
			<div className='flex w-full'>
				<Icon className='size-10 sm:size-[52px]' />
				<ArrowUpRight className='sm:hidden fill-black ml-auto' />
			</div>
			<p className='leading-none transition duration-200'>{children}</p>
		</Link>
	)
}

export default ServiceCard
