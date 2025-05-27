import Breadcrumbs from "@/shared/ui-kit/breadcrumbs"
import HeadingSmall from "@/shared/ui-kit/heading/heading-small"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"
import Image from "next/image"
import Filters from "./filters"
import { Link } from "react-transition-progress/next"
import { categorySlugs } from "@/shared/lib/constants/slugs"

const ElectricalEquipment = () => {
	return (
		<>
			<SectionWrapper className='relative pt-10 pb-[240px] lg:pb-32 overflow-hidden background-linear'>
				<Breadcrumbs />
				<div className='mt-8'>
					<HeadingSmall>
						Электрооборудование <br />
						для подвижного состава
					</HeadingSmall>
					<p className='mt-5 max-w-[466px] text-black-60 text-sm leading-tight'>
						Надёжное и долговечное электрооборудование, обеспечивающее стабильную работу, безопасность и соответствие
						высоким требованиям эксплуатации.
					</p>
				</div>
				<div className='lg:right-0 bottom-0 left-0 lg:left-[unset] absolute w-[450px] xl:w-[700px] h-[800px] translate-x-0 translate-y-1/2 md:translate-x-[5%] lg:translate-y-[40%] xl:translate-y-1/2'>
					<Image className='object-contain' src='/products/electrical-equipment/hero.png' fill alt='image' />
				</div>
			</SectionWrapper>
			<Filters />
			<section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-12 sm:mt-28 mb-14 border-t sm:border-t-0 h-[800px] sm:h-[444px]'>
				{productLinks.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className='group flex flex-col justify-between hover:bg-accent p-6 sm:border-t border-r border-b w-full h-full hover:text-white transition-all duration-200'
					>
						<p className='text-xl md:text-2xl tracking-[-0.02em]'>{item.title}</p>
						<p className='text-black-60 group-hover:text-white text-sm leading-none tracking-[-0.02em] transition-all duration-200'>
							{item.description}
						</p>
					</Link>
				))}
			</section>
		</>
	)
}

const productLinks = [
	{
		href: `/products/${categorySlugs.interiors}`,
		title: "Интерьеры",
		description: <>Производство потолочной обшивки вагонов рельсового транспорта</>,
	},
	{
		href: `/products/${categorySlugs.busbars}`,
		title: "Шины и токоотводы",
		description: (
			<>
				Электрооборудование
				<br /> для локомотивостроения
			</>
		),
	},
	{
		href: `/products/${categorySlugs.surplusSale}`,
		title: "Продажа неликвидов",
		description: (
			<>
				Продажа ТМЦ,
				<br />
				снятых с производства
			</>
		),
	},
	{
		href: `/products/${categorySlugs.surplusSale}`,
		title: "Телеком",
		description: (
			<>
				Телекоммуникационные
				<br />
				стойки и шкафы
			</>
		),
	},
]

export default ElectricalEquipment
