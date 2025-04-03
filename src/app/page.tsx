"use client"
import ServiceCard from "@/shared/ui-kit/cards/service-card"
import Heading from "@/shared/ui-kit/heading"
import NumberHeading from "@/shared/ui-kit/heading/number"
import ArrowUpRight from "@/shared/ui-kit/icons/arrow-up-right"
import LogoTransparent from "@/shared/ui-kit/icons/logo-transparent"
import Secure from "@/shared/ui-kit/icons/secure"
import Signature from "@/shared/ui-kit/icons/signature"
import Spanner from "@/shared/ui-kit/icons/spanner"
import Badge from "@/shared/ui-kit/label"
import TestimonialsMarquee from "@/shared/ui-kit/testimonials-marquee"
import Hero from "@/widgets/main-page/hero"
import Horizontal from "@/widgets/main-page/horizontal"
import Image from "next/image"
import { Link } from "react-transition-progress/next"

export default function Home() {
	return (
		<>
			<Hero />
			<section className='flex lg:flex-row flex-col justify-between gap-x-12 px-4 sm:px-6 py-6 sm:py-14 min-h-[500px] xl:min-h-[630px]'>
				<LogoTransparent className='w-full lg:w-[unset]' />
				<p className='max-w-[690px] xl:text-[40px] text-2xl sm:text-3xl lg:text-4xl leading-none'>
					Мы являемся лидерами среди производителей оборудования для подвижных составов и телекоммуникаций в России
				</p>
			</section>
			<Horizontal />
			<section className='flex sm:flex-row flex-col-reverse w-full sm:h-[450px] lg:h-[670px]'>
				<div className='relative w-full h-[450px] sm:h-full'>
					<Image className='object-cover' src='/main-page/ratep.png' alt='Ratep' fill />
				</div>
				<div className='flex items-end p-4 sm:p-6 w-full h-[300px] sm:h-auto'>
					<p className='lg:text-[40px] text-2xl leading-none tracking-tight'>
						РАТЕП ИННОВАЦИЯ — стабильное и надёжное предприятие, нашим клиентам мы предлагаем полный спектр услуг
					</p>
				</div>
			</section>
			<section className='flex sm:flex-row flex-col border-t h-[660px] sm:h-[400px] lg:h-[542px] text-xl sm:text-2xl leading-none'>
				<ServiceCard Icon={Signature} border>
					Контрактное <br />
					производство
				</ServiceCard>
				<ServiceCard Icon={Secure} border>
					Гарантийное <br />
					обслуживание
				</ServiceCard>
				<ServiceCard Icon={Spanner}>
					Ремонт <br />
					оборудования
				</ServiceCard>
			</section>
			<section className='flex sm:flex-row flex-col-reverse justify-between gap-y-14 pt-[120px] sm:pt-[70px] border-t'>
				<div className='relative'>
					<NumberHeading className='pl-4 sm:pl-6 text-accent'>100+</NumberHeading>
					<div className='absolute bg-black-10 w-full h-[1px]'></div>
					<p className='mt-4 pl-4 sm:pl-6 text-base'>Компаний-партнеров</p>
				</div>
				<div className='flex gap-x-11 pr-6 xl:pr-11 pl-4 sm:pl-0 leading-none sm:leading-[1.3]'>
					<p className='hidden 2md:block mt-1 max-w-[330px] xl:max-w-[365px] text-black-60'>
						За время работы мы выстроили открытые и доверительные отношения с нашими партнёрами.
						<br />
						<br />
						Мы выбираем надёжных поставщиков комплектующих, сырья и материалов, уделяя особое внимание качеству
						поставляемых товаров.
						<br />
						<br />
						Накопленный опыт позволил нам объединить усилия с генеральными разработчиками подвижного состава и
						организовать оперативное взаимодействие с управлением железных дорог и депо. Все это помогает нам идти в
						ногу со временем, быть в курсе новейших возможностей и предлагать заказчикам интересные и нестандартные
						решения, используя собственную конструкторскую базу.
					</p>
					<div className='max-w-[265px] sm:font-normal font-medium text-xs sm:text-base'>
						<Badge className='mb-3 w-fit'>6 500+</Badge>
						<p className='pb-4 border-b'>
							Секций локомотивов <br />и вагонов оборудованы изделиями РАТЕП—ИННОВАЦИЯ
						</p>
						<p className='mt-4'>
							В основе нашего сотрудничества лежат общие профессиональные ценности — ответственность, качество,
							эффективность
						</p>
					</div>
				</div>
			</section>
			<TestimonialsMarquee huge className='mt-24 w-full leading-none' />
			<section className='flex flex-col justify-center items-center mx-auto px-4 py-28 max-w-[340px] 3xs:max-w-[1381px]'>
				<div className='flex items-start gap-x-2 sm:gap-x-3'>
					<Link href='#'>
						<Heading className='text-accent tracking-tighter'>Оставить заявку</Heading>
					</Link>
					<ArrowUpRight className='fill-accent mt-0.5 sm:mt-2 size-6 sm:size-8' />
				</div>
				<Heading className='opacity-20 mt-1 text-center tracking-tighter'>
					Ответственно подходим к работе и держим высокую планку качества
				</Heading>
			</section>
		</>
	)
}
