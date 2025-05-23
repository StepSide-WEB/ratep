import Breadcrumbs from "@/shared/ui-kit/breadcrumbs"
import HeadingSmall from "@/shared/ui-kit/heading/heading-small"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"
import Image from "next/image"
import Filters from "./filters"

const ElectricalEquipment = () => {
	return (
		<>
			<SectionWrapper className='relative pt-10 pb-[240px] lg:pb-32 overflow-hidden'>
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
				<div className='lg:right-0 bottom-0 left-0 lg:left-[unset] -z-10 absolute w-[450px] xl:w-[700px] h-[800px] translate-x-0 translate-y-1/2 md:translate-x-[5%] lg:translate-y-[40%] xl:translate-y-1/2'>
					<Image className='object-contain' src='/products/electrical-equipment/hero.png' fill alt='image' />
				</div>
			</SectionWrapper>
			<Filters />
		</>
	)
}

export default ElectricalEquipment
