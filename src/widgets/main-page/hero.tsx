"use client"
import { cn } from "@/shared/lib/utils"
import CardImage from "@/shared/ui-kit/cards/card-image"
import Heading from "@/shared/ui-kit/heading"
import Badge from "@/shared/ui-kit/label"
import TestimonialsMarquee from "@/shared/ui-kit/testimonials-marquee"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import s from "./index.module.scss"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const previewRef = useRef(null)
	const secondSectionRef = useRef(null)
	const [videoLoaded, setVideoLoaded] = useState(false)

	useEffect(() => {
		if (!videoRef.current) return
		videoRef.current
			.play()
			.then(() => setVideoLoaded(true))
			.catch()
	}, [])

	useEffect(() => {
		if (!previewRef.current || !secondSectionRef.current) return
		const preview = previewRef.current
		const secondSection = secondSectionRef.current
		ScrollTrigger.create({
			trigger: secondSection,
			start: "-220px 400px",
			end: "bottom 200px",
			scrub: true,
			onUpdate: (self) => {
				const scale = 1 + self.progress * 1.4
				gsap.set(preview, {
					width: `${scale * 640}px`,
					height: `${scale * 160}px`,
				})
			},
		})
	}, [])

	return (
		<>
			<section className='md:hidden relative flex flex-col justify-end h-[calc(100svh-56px)] max-h-[1000px] overflow-hidden'>
				{/* <Image className='absolute object-center object-cover' src='/preview.png' fill alt='Preview' /> */}
				<video
					ref={videoRef}
					src='/main-page/videos/1.mp4'
					className='absolute h-[calc(100svh-56px)] max-h-[1000px] object-center object-contain scale-[3] 3xs:scale-[2.1] xs:scale-[2.8] md:scale-[1.8]'
					autoPlay
					loop
					muted
					playsInline
					onLoadedData={() => setVideoLoaded(true)}
				/>
				<div className={cn("absolute bottom-0 h-1/2 w-full", s.Gradient)}></div>
				<div className='z-20 relative flex flex-col gap-y-4 p-4 text-white'>
					<Heading className='text-left'>
						Создаём инновации <br /> для российского рынка
					</Heading>
					<p className='opacity-60 text-sm tracking-[-0.015em]'>
						В разработке и производстве продукции
						<br /> уже более 15 лет
					</p>
				</div>
				<TestimonialsMarquee className='z-20 relative pb-8 max-w-full' />
			</section>
			{/* PC */}
			<section className='hidden relative md:flex flex-col justify-center items-center border-b min-h-[690px] overflow-hidden'>
				<TestimonialsMarquee gradientWidth={400} />
				<Heading className='mt-4 tracking-[-0.04em]'>
					Создаём инновации <br /> для российского рынка
				</Heading>
				<div className='relative mt-8 w-[640px] h-40 overflow-hidden'></div>
				<div
					ref={previewRef}
					className='absolute bg-black-10 rounded-sm w-[640px] h-40 overflow-hidden translate-y-1/3 xl:translate-y-[calc(50%+16px)]'
				>
					{!videoLoaded && <Image className='object-center object-cover' src='/preview.png' fill alt='Preview' />}
					<video
						ref={videoRef}
						src='/main-page/videos/1.mp4'
						className='object-center object-cover'
						autoPlay
						loop
						muted
						playsInline
						onLoadedData={() => setVideoLoaded(true)}
					/>
				</div>
				<Badge className='mt-6'>Лидеры рынка</Badge>
				<p className='mt-3 max-w-[243px] text-sm text-center leading-none tracking-[-0.015em]'>
					В разработке и производстве продукции уже более 15 лет
				</p>
			</section>
			<section className='relative flex lg:flex-row flex-col justify-between border-b'>
				<div className='absolute h-0' ref={secondSectionRef}></div>
				<CardImage className='md:border-r border-b md:border-b-0' image='/main-page/cards/1.png'>
					Продукция
					<br /> для подвижных составов
				</CardImage>
				<CardImage imageClassName='h-[263px]' image='/main-page/cards/2.png'>
					Продукция
					<br /> для телекоммуникации
				</CardImage>
			</section>
		</>
	)
}

export default Hero
