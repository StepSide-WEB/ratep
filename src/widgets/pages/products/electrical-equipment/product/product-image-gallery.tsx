"use client"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"
import { cn } from "@/shared/lib/utils"
import { useIsMobile } from "@/shared/hooks/use-is-mobile"

type ProductImageGalleryProps = {
	images: string[]
	productName: string
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
	const isMobile = useIsMobile()
	const shouldUseCarousel = isMobile ? images.length > 1 : images.length >= 3
	const [emblaRef] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", slidesToScroll: 1 })

	if (!images.length) return null

	return (
		<SectionWrapper className={cn("mt-14 w-full", shouldUseCarousel && "pr-0 sm:pr-0")}>
			{shouldUseCarousel ? (
				<div className='w-full overflow-hidden' ref={emblaRef}>
					<div className='flex gap-[10px] md:gap-4'>
						{images.map((src, index) => (
							<div
								key={index}
								className='flex flex-none justify-center items-center bg-[#f5f5f5] px-6 py-6 lg:py-14 w-[80%] sm:w-[50%] md:w-[60%] max-w-[600px] h-[245px] lg:h-[600px] cursor-pointer'
							>
								<Image
									src={src}
									alt={`${productName} ${index + 1}`}
									width={500}
									height={300}
									className='w-full h-full object-contain'
								/>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className='flex lg:flex-row flex-col gap-4 w-full'>
					{images.map((src, index) => (
						<div
							key={index}
							className='flex justify-center items-center bg-[#f5f5f5] py-6 lg:py-14 w-full h-[345px] lg:h-[600px]'
						>
							<Image
								src={src}
								alt={`${productName} ${index + 1}`}
								width={500}
								height={300}
								className='w-full h-full object-contain pointer-events-none'
							/>
						</div>
					))}
				</div>
			)}
		</SectionWrapper>
	)
}

export default ProductImageGallery
