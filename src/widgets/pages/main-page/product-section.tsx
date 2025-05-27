"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Train from "@/shared/ui-kit/icons/train"
import Antenna from "@/shared/ui-kit/icons/antenna"
import ProductCategory from "./product-category"

gsap.registerPlugin(ScrollTrigger)

const ProductSection = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const cardsRef = useRef<HTMLDivElement[]>([])

	useEffect(() => {
		if (!sectionRef.current || cardsRef.current.length < 2) return

		const mm = gsap.matchMedia()
		let hasRefreshed = false

		mm.add("(min-width: 640px)", () => {
			gsap.to(cardsRef.current.slice(1), {
				marginTop: (_, target) => -300 * (Number(target.dataset.index) - 1),
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "20% center",
					end: "25% center",
					scrub: 1.2,
					snap: {
						snapTo: "labels",
						duration: { min: 0.2, max: 0.5 },
						delay: 0,
						ease: "power1.inOut",
					},
					onEnter: () => {
						if (!hasRefreshed) {
							hasRefreshed = true
							ScrollTrigger.refresh()
						}
					},
				},
			})
		})

		return () => {
			mm.revert()
		}
	}, [])

	return (
		<section ref={sectionRef} className='relative overflow-hidden'>
			{[
				{
					title: "Продукция для подвижных составов",
					icon: Train,
					badges: [
						"Аппаратные камеры",
						"Унифицированные пульты управления",
						"Преобразовательная техника",
						"Системы управления тепловозов",
					],
				},
				{
					title: "Телекоммуникационная продукция",
					icon: Antenna,
					badges: [
						"Напольные и настенные телекоммуникационные шкафы",
						"Монтажные стойки",
						"Антивандальные шкафы",
						"Аккумуляторные шкафы",
						"Дополнительное оборудование",
					],
				},
			].map((item, index) => (
				<div
					key={index}
					ref={(el) => {
						if (el) cardsRef.current[index] = el
					}}
					data-index={index + 1}
					className='relative'
				>
					<ProductCategory {...item} />
				</div>
			))}
		</section>
	)
}

export default ProductSection
