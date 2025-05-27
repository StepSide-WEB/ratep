import Heading from "@/shared/ui-kit/heading"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"
import Image from "next/image"

const Page = () => {
	return (
		<>
			<SectionWrapper className='flex flex-col pt-10 lg:pt-24 pb-4 md:pb-10 background-linear'>
				<Heading>
					Менеджмент
					<br />
					качества
				</Heading>
				<div className='flex flex-row-reverse justify-end gap-x-2 mt-7 ml-0 lg:ml-auto h-14 md:h-24'>
					{Array.from({ length: 2 }, (_, index) => (
						<div key={index} className='p-1 md:p-5 border w-[102px] md:w-[175px] h-full'>
							<Image
								className='h-full object-contain'
								src={`/docs/quality-management/hero-${index + 1}.png`}
								alt='img'
								width={1920}
								height={1080}
							/>
						</div>
					))}
				</div>
			</SectionWrapper>
			<SectionWrapper className='pt-14 tracking-[-0.015em]'>
				<h2 className='text-lg sm:text-xl lg:text-2xl'>Система менеджемента качества</h2>
				<p className='opacity-70 mt-4 max-w-[582px] text-sm leading-[1.3] md:leading-none'>
					На предприятии внедрена система менеджмента качества, отвечающая требованиям стандартов ГОСТ ISO 9001:2015 и
					требованиям международного стандарта качества для железнодорожной отрасли ISO 22163:2023
				</p>
				<div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-9 w-full'>
					{Array.from({ length: 3 }, (_, index) => (
						<Image
							key={index}
							className='w-full h-auto object-contain'
							src={`/docs/quality-management/certificate-${index + 1}.png`}
							alt='img'
							width={1920}
							height={1080}
						/>
					))}
				</div>

				<h2 className='mt-20 md:mt-[100px] text-lg sm:text-xl lg:text-2xl'>
					Политика в области качества и технической безопасности
				</h2>
				<div className='gap-4 grid grid-cols-1 md:grid-cols-2 mt-9 mb-28 md:mb-20 w-full'>
					{Array.from({ length: 2 }, (_, index) => (
						<Image
							key={index}
							className='w-full h-auto object-contain'
							src={`/docs/quality-management/policy-${index + 1}.png`}
							alt='img'
							width={1920}
							height={1080}
						/>
					))}
				</div>
			</SectionWrapper>
		</>
	)
}

export default Page
