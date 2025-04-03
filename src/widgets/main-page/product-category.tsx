import { forwardRef } from "react"
import Link from "next/link"
import Heading from "@/shared/ui-kit/heading"
import ArrowUpRight from "@/shared/ui-kit/icons/arrow-up-right"
import Badge from "@/shared/ui-kit/label"

const ProductCategory = forwardRef<
	HTMLDivElement,
	{
		title: string
		icon: React.ElementType
		badges: string[]
	}
>(({ title, icon: Icon, badges }, ref) => {
	return (
		<div ref={ref} className='flex sm:flex-row flex-col justify-between gap-y-4 bg-white p-4 sm:p-6 border-t'>
			<div className='flex sm:flex-col flex-col-reverse justify-between gap-y-8 w-full'>
				<p className='max-w-[260px] text-xl 2md:text-2xl leading-none'>{title}</p>
				<div className='flex justify-between'>
					<Icon className='stroke-accent size-11 sm:size-[52px]' />
					<ArrowUpRight className='sm:hidden block fill-black size-6' />
				</div>
			</div>
			<div className='flex flex-col gap-y-20 2md:gap-y-40 w-full'>
				<div className='flex flex-wrap gap-1 sm:gap-2 max-w-[620px]'>
					{badges.map((badge, index) => (
						<Badge key={index} outline>
							{badge}
						</Badge>
					))}
				</div>
				<Link
					href='#'
					className='hidden sm:flex [&>*]:hover:fill-accent max-w-[460px] hover:text-accent transition duration-200'
				>
					<Heading>Перейти в каталог</Heading>
					<ArrowUpRight className='fill-black size-14' />
				</Link>
			</div>
		</div>
	)
})

ProductCategory.displayName = "ProductCategory"

export default ProductCategory
