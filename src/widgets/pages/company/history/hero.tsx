"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import usePageLoaded from "@/shared/hooks/use-loading"
import Heading from "@/shared/ui-kit/heading"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
	const isPageLoaded = usePageLoaded()
	const textRef = useRef<HTMLSpanElement[]>([])
	const hintRef = useRef<HTMLParagraphElement | null>(null)
	const sectionRef = useRef<HTMLElement | null>(null)

	useEffect(() => {
		if (isPageLoaded && textRef.current.length) {
			gsap.from(textRef.current, {
				yPercent: 100,
				opacity: 0,
				stagger: 0.1,
				duration: 0.5,
				delay: 0.3,
				ease: "power3.out",
			})
		}
	}, [isPageLoaded])

	useEffect(() => {
		if (!sectionRef.current || !hintRef.current) return

		const anim = gsap.to(hintRef.current, {
			opacity: 0,
			duration: 0.3,
			ease: "power2.out",
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "bottom-=120px top",
				end: "bottom bottom",
				toggleActions: "play none none reverse",
			},
		})

		return () => {
			anim.scrollTrigger?.kill()
			anim.kill()
		}
	}, [])

	return (
		<section
			ref={sectionRef}
			className='relative flex flex-col justify-center items-center bg-white h-[calc(100svh-80px)] text-center'
		>
			<Heading className='mt-auto'>
				<div className='overflow-hidden'>
					<span
						ref={(el) => {
							if (el) {
								textRef.current[0] = el
							}
						}}
						className='block text-accent'
					>
						Наша история
					</span>
				</div>
				<div className='overflow-hidden'>
					<span
						ref={(el) => {
							if (el) {
								textRef.current[1] = el
							}
						}}
						className='block'
					>
						за более, чем 15 лет
					</span>
				</div>
				<div className='overflow-hidden'>
					<span
						ref={(el) => {
							if (el) {
								textRef.current[2] = el
							}
						}}
						className='block'
					>
						успешной работы
					</span>
				</div>
			</Heading>
			<p ref={hintRef} className='opacity-40 mt-auto mb-6 text-sm transition-opacity'>
				Смотрите ниже
			</p>
		</section>
	)
}

export default Hero
