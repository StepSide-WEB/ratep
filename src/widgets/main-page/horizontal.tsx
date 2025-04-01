"use client"
import { cn } from "@/shared/lib/utils"
import Fabric from "@/shared/ui-kit/icons/fabric"
import Badge from "@/shared/ui-kit/label"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import s from "./index.module.scss"
import Settings from "@/shared/ui-kit/icons/settings"
import Train from "@/shared/ui-kit/icons/train"

gsap.registerPlugin(ScrollTrigger)

const data = [
	[
		{ label: "17 000+ м2", text: "Производственные площади предприятия" },
		{ label: "в 12 раз", text: "Выросло наше производство за 17 лет" },
		{ label: "500+", text: "Рабочих мест создано" },
	],
	[
		{ label: "1 000+", text: "Поставщиков комплектующих и материалов для производства" },
		{ label: "500+", text: "Было выпущено комплектов потолочной обшивки" },
		{ label: "200+", text: "Успешно выполненных проектов" },
	],
	[
		{ label: "1 000+", text: "Поставщиков комплектующих и материалов для производства" },
		{ label: "500+", text: "Было выпущено комплектов потолочной обшивки" },
		{ label: "200+", text: "Успешно выполненных проектов" },
	],
]
const numbers = ["4 000+", "1 000+", "2 000+"]
const descriptions = [
	"Выпущено пультов управления машинистов",
	"Тонн металла перерабатывается ежегодно",
	"Выпущено аппаратных камер тепловоза",
]
const trainImages = ["/trains/1.png", "/trains/2.png", "/trains/3.png"]
const icons = [
	{ component: Fabric, index: 0 },
	{ component: Settings, index: 1 },
	{ component: Train, index: 2, extraClass: s.Stroke },
]

const Horizontal = () => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const panelsRef = useRef<HTMLDivElement[]>([])
	const numbersRef = useRef<HTMLParagraphElement[]>([])
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		if (!containerRef.current || panelsRef.current.length === 0) return

		const sections = panelsRef.current
		const width = containerRef.current?.offsetWidth || 0
		const tl = gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: containerRef.current,
				pin: true,
				scrub: 0.6,
				snap: 1 / (sections.length - 1),
				end: () => `+=${width}`,
				onUpdate: (self) => setActiveIndex(Math.round(self.progress * (sections.length - 1))),
			},
		})

		return () => {
			tl.kill()
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	return (
		<div ref={containerRef} className={cn("relative flex flex-col h-[100svh] overflow-hidden", s.Horizontal)}>
			<div className='relative flex justify-between items-center mt-16 p-4 sm:p-6 w-full'>
				<div className={cn("flex gap-x-2", s.Icons)}>
					{icons.map(({ component: Icon, index, extraClass }) => (
						<div
							key={index}
							className={cn(
								"rounded-full 2md:mb-0 mb-24 md:mb-12 flex items-center justify-center size-12 transition-all",
								activeIndex >= index ? "opacity-100" : "opacity-0 pointer-events-none",
								activeIndex === index ? "bg-accent" : "bg-accent-10"
							)}
						>
							<Icon className={cn(extraClass, activeIndex === index && s.Active)} />
						</div>
					))}
				</div>
				{data.map((item, idx) => (
					<div
						key={idx}
						className={cn(
							"absolute top-24 2md:top-6 2md:left-[unset] left-4 sm:left-6 2md:right-6 2md:-translate-x-6 flex flex-wrap gap-y-6 gap-x-2 justify-between transition-opacity duration-500",
							activeIndex === idx ? "opacity-100" : "opacity-0"
						)}
					>
						{item.map((el, i) => (
							<div key={i} className='flex flex-col gap-y-3 max-w-[160px] sm:max-w-[253px] text-xs 3xs:text-sm'>
								<Badge className='w-fit'>{el.label}</Badge>
								<p>{el.text}</p>
							</div>
						))}
					</div>
				))}
			</div>
			<div className='relative flex justify-center items-center my-6 h-full'>
				{trainImages.map((src, idx) => (
					<Image
						key={idx}
						src={src}
						alt='Train'
						fill
						className={cn(
							"absolute transition-opacity duration-500 px-2 object-contain my-auto max-h-[214px]",
							activeIndex === idx ? "opacity-100" : "opacity-0"
						)}
					/>
				))}
			</div>
			<div className='md:left-1/2 relative flex mt-auto min-w-[300%] md:min-w-[150%]'>
				{numbers.map((num, index) => (
					<div
						key={index}
						ref={(el) => {
							if (el) panelsRef.current[index] = el
						}}
						className='flex flex-col justify-end pb-3 pl-4 sm:pl-6 w-screen h-full'
					>
						<p
							ref={(el) => {
								if (el) numbersRef.current[index] = el
							}}
							className={cn(
								"mr-auto text-[80px] 3xs:text-[96px] md:text-[120px] xl:text-[160px] leading-[.85] whitespace-nowrap transition-colors border-b w-full tracking-[-0.04em]",
								activeIndex <= index ? "text-accent" : "text-black-10"
							)}
						>
							{num}
						</p>
						<p
							className={cn(
								"mt-4 text-sm leading-none transition-opacity",
								activeIndex <= index ? "opacity-100" : "opacity-30"
							)}
						>
							{descriptions[index] || ""}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Horizontal
