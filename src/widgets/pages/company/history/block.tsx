"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { ReactNode, useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Block = ({ children }: { children: ReactNode }) => {
	const blockRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!blockRef.current) return
		const paragraphs = blockRef.current.querySelectorAll("p")
		if (!paragraphs.length) return
		const ctx = gsap.context(() => {
			gsap.from(paragraphs, {
				y: 40,
				opacity: 0,
				stagger: 0.15,
				duration: 0.6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: blockRef.current,
					start: "100px 80%",
					once: true,
				},
			})
		}, blockRef)

		return () => ctx.revert()
	}, [])

	return (
		<article ref={blockRef} className='py-9 xl:border-b max-w-[309px] sm:max-w-[593px]'>
			{children}
		</article>
	)
}

export default Block
