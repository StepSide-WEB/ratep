import Heading from "@/shared/ui-kit/heading"
import Link from "next/link"

interface NewsCardProps {
	title: string
	description: string
	date: {
		day: string
		month: string
		year: string
	}
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, date }) => {
	return (
		<Link
			href='#'
			className='flex flex-col gap-y-6 bg-[#F8F8F9] p-4 sm:p-5 min-w-[298px] sm:min-w-[343px] max-w-[343px]'
		>
			<div className='pb-4 border-b h-full'>
				<p className='font-medium text-xl leading-none'>{title}</p>
				<p className='mt-6 text-black-60 text-sm sm:text-base leading-[1.3] sm:leading-[1.3]'>{description}</p>
			</div>
			<div className='flex justify-between'>
				<Heading className='text-accent'>{date.day}</Heading>
				<p className='font-medium text-sm leading-none'>
					{date.month}
					<br />
					{date.year}
				</p>
			</div>
		</Link>
	)
}

export default NewsCard
