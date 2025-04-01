"use client"
import LogoTransparent from "@/shared/ui-kit/icons/logo-transparent"
import Hero from "@/widgets/main-page/hero"
import Horizontal from "@/widgets/main-page/horizontal"

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
		</>
	)
}
