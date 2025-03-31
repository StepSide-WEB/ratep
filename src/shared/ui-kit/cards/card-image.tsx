import Image from "next/image"
import ArrowUpRight from "../icons/arrow-up-right"
import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"
import s from "./index.module.scss"
import { Link } from "react-transition-progress/next"

interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
	image: string
	imageClassName?: string
}

const CardImage = ({ className, children, image, imageClassName }: CardImageProps) => {
	return (
		<Link
			href='#'
			className={cn(
				"flex flex-col justify-between gap-y-5 p-4 sm:p-6 w-full text-xl sm:text-2xl leading-none cursor-pointer",
				s.CardImage,
				className
			)}
		>
			<ArrowUpRight className='ml-auto' />
			<div className={cn(`relative w-full h-[236px]`, imageClassName)}>
				<Image className='object-contain' src={image} alt='Изображение' fill />
			</div>
			<p className='transition duration-200'>{children}</p>
		</Link>
	)
}

export default CardImage
