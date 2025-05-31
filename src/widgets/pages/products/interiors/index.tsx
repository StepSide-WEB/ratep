import Breadcrumbs from "@/shared/ui-kit/breadcrumbs"
import HeadingSmall from "@/shared/ui-kit/heading/heading-small"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"
import Image from "next/image"
import { projects } from "./constants"
import TestimonialsMarquee from "@/shared/ui-kit/testimonials-marquee"
import RequestSection from "@/widgets/sections/request-section"
import { Link } from "react-transition-progress/next"
import { categorySlugs } from "@/shared/lib/constants/slugs"

const Interiors = () => {
	return (
		<>
			<SectionWrapper className='relative flex py-5 sm:py-10 h-[calc(100svh-56px)] sm:max-h-[1000px] overflow-hidden background-linear'>
				<div className='z-20 relative flex flex-col justify-between w-full h-full'>
					<Breadcrumbs mode='light' />
					<div className='flex xl:flex-row flex-col items-end gap-x-4 gap-y-3'>
						<HeadingSmall className='w-full text-white leading-none whitespace-nowrap'>
							Интерьеры <br />
							рельсового транспорта
						</HeadingSmall>
						<div className='xl:mb-1.5 w-full'>
							<p className='max-w-[574px] text-white-60 text-sm leading-[1.35] md:leading-none'>
								Выпускаем комплекты потолочной обшивки для рельсового транспорта — современный внешний вид, удобство
								монтажа и надёжность в эксплуатации.
							</p>
						</div>
					</div>
				</div>
				<div
					style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -13.45%, #000000 100%)" }}
					className='bottom-0 left-0 z-10 absolute opacity-70 w-full h-full'
				></div>
				<Image className='object-cover object-top' alt='hero' src='/products/interiors/hero.jpg' fill />
			</SectionWrapper>
			<SectionWrapper className='flex md:flex-row flex-col-reverse gap-y-40 xl:gap-x-4 pt-6 md:pt-14'>
				<div className='w-full'>
					<p className='text-black-60 text-sm'>Наши проекты</p>
				</div>
				<div className='w-full'>
					<p className='text-2xl lg:text-3xl xl:text-4xl leading-none sm:leading-none tracking-[-0.03em]'>
						За плечами огромный опыт
						<br />и реализованные проекты для крупнейших производителей страны
					</p>
				</div>
			</SectionWrapper>
			<SectionWrapper className='gap-4 grid grid-cols-1 md:grid-cols-2 mt-32'>
				{projects.map((project, index) => (
					<article key={index} className='bg-light-gray p-5 tracking-[-0.015em]'>
						<p className='text-base sm:text-xl leading-none'>{project.title}</p>
						<p className='mt-3 max-w-[535px] text-black-60 text-sm leading-[1.35] lg:leading-none'>
							{project.description}
						</p>
						<div className='justify-between gap-5 grid grid-cols-2 lg:grid-cols-3 mt-8 w-full text-sm leading-none'>
							{project.details.map((detail, i) => (
								<div key={i}>
									<p className='text-black-60'>{detail.label}</p>
									<p className='mt-1.5'>{detail.value}</p>
								</div>
							))}
						</div>
					</article>
				))}
			</SectionWrapper>
			<section className='relative mt-32 md:mt-[220px] h-[600px] md:h-[800px]'>
				<Image className='object-cover' src='/products/interiors/section-image.jpg' fill alt='image' />
				<div className='top-0 left-0 absolute bg-black opacity-20 size-full'></div>
			</section>
			<SectionWrapper className='flex md:flex-row flex-col gap-y-40 xl:gap-x-4 pt-6 md:pt-10'>
				<div className='w-full'>
					<p className='text-black-60 text-sm'>Наши партнёры</p>
				</div>
				<div className='w-full'>
					<p className='max-w-[550px] text-2xl lg:text-3xl xl:text-4xl leading-none sm:leading-none tracking-[-0.03em]'>
						На протяжении многих лет нам доверяют крупнейшие игроки на рынке
					</p>
				</div>
			</SectionWrapper>
			<TestimonialsMarquee huge className='z-20 relative bg-white mt-24 mb-14 w-full leading-none' />
			<RequestSection />
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
		href: `/products/${categorySlugs.electricalEquipment}`,
		title: "Электрооборудование",
		description: (
			<>
				Надёжное электрооборудование
				<br />
				для стабильной и безопасной работы
			</>
		),
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

export default Interiors
