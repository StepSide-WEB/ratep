"use client"
import Heading from "@/shared/ui-kit/heading"
import ArrowUpRight from "@/shared/ui-kit/icons/arrow-up-right"
import React, { useEffect, useRef } from "react"
import { Link } from "react-transition-progress/next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const RequestSection = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const requestRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!sectionRef.current || !requestRef.current) return

		const mm = gsap.matchMedia()
		let hasRefreshed = false

		mm.add("(min-width: 640px)", () => {
			gsap.to(requestRef.current, {
				y: "-130%",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "40% center",
					end: "top center",
					scrub: 1.4,
					onEnter: () => {
						if (!hasRefreshed) {
							hasRefreshed = true
							ScrollTrigger.refresh()
						}
					},
				},
			})
		})

		mm.add("(min-width: 640px)", () => {
			gsap.to(sectionRef.current, {
				paddingTop: "20px",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "40% center",
					end: "45% center",
					scrub: 1,
				},
			})
		})

		return () => {
			mm.revert()
		}
	}, [])

	return (
		<section
			ref={sectionRef}
			className='flex flex-col justify-center items-center mx-auto px-4 py-14 sm:py-28 max-w-[340px] 3xs:max-w-[1381px]'
		>
			<div ref={requestRef} className='flex items-start gap-x-2 sm:gap-x-3'>
				<Link href='#' className='flex items-start gap-x-2 sm:gap-x-3 hover:gap-x-6 transition-all duration-300'>
					<Heading className='text-accent tracking-tighter'>Оставить заявку</Heading>
					<ArrowUpRight className='fill-accent mt-0.5 sm:mt-2 size-6 sm:size-8' />
				</Link>
			</div>
			<Heading className='opacity-20 text-center tracking-tighter'>
				Ответственно подходим к работе и держим высокую планку качества
			</Heading>
		</section>
	)
}

export default RequestSection
