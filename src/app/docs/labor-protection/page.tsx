import Heading from "@/shared/ui-kit/heading"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"
import { Link } from "react-transition-progress/next"

const reports = [
	{
		title: <>Отчет СОУТ за 2016 год</>,
		file: "PDF. 590 KB",
		href: "/docs/labor-protection/report-2016.pdf",
	},
	{
		title: <>Отчет СОУТ за 2017 год</>,
		file: "PDF. 205 KB",
		href: "/docs/labor-protection/report-2017.pdf",
	},
	{
		title: <>Отчет СОУТ за 2021 год</>,
		file: "PDF. 1,3 MB",
		href: "/docs/labor-protection/report-2021.pdf",
	},
	{
		title: <>Отчет СОУТ за 2023 год</>,
		file: "PDF. 5,3 MB",
		href: "/docs/labor-protection/report-2023.pdf",
	},
	{
		title: <>Отчет СОУТ за 2024 год</>,
		file: "PDF. 5 MB",
		href: "/docs/labor-protection/report-2024.pdf",
	},
	{
		title: (
			<>
				Перечень рекомендуемых <br /> мероприятий
			</>
		),
		file: "PDF. 5,4 MB",
		href: "/docs/labor-protection/actions-list.pdf",
	},
]

const Page = () => {
	return (
		<>
			<SectionWrapper className='flex flex-col pt-10 lg:pt-24 pb-[100px] lg:pb-[162px] background-linear'>
				<Heading>
					Оценка <br /> условий труда
				</Heading>
			</SectionWrapper>

			<SectionWrapper className='gap-4 sm:gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6 pb-32 w-full'>
				{reports.map(({ title, file, href }, index) => (
					<Link
						key={index}
						href={href}
						className='flex flex-col justify-center items-center hover:bg-accent border h-[205px] md:h-[360px] hover:text-white text-center tracking-tight transition-all duration-200 cursor-pointer'
					>
						<p className='text-lg sm:text-2xl leading-[1.3] md:leading-none'>{title}</p>
						<p className='opacity-50 mt-4 text-base sm:text-lg leading-none'>{file}</p>
					</Link>
				))}
			</SectionWrapper>
		</>
	)
}

export default Page
