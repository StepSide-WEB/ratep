"use client"
import { useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "@/shared/hooks/useIsomorphicLayoutEffect"
import { cn } from "@/shared/lib/utils"
import { years } from "./constants"
import Timeline from "./timeline"
import List from "./list"
import YearCarousel from "./carousel"
import { Description, Title } from "./text-parts"
import Block from "./block"

gsap.registerPlugin(ScrollTrigger)

const ScrollSection = () => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const sectionsRef = useRef<HTMLDivElement[]>([])
	const timelineRef = useRef<HTMLDivElement | null>(null)
	const [activeIndex, setActiveIndex] = useState(0)

	useIsomorphicLayoutEffect(() => {
		if (!containerRef.current || sectionsRef.current.length === 0 || !timelineRef.current) return
		const mm = gsap.matchMedia()
		mm.add("(min-width: 1280px)", () => {
			const ctx = gsap.context(() => {
				gsap.to(sectionsRef.current, {
					yPercent: -100 * (sectionsRef.current.length - 1),
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top top",
						end: () => `+=${containerRef.current!.offsetHeight * (sectionsRef.current.length / 2)}`,
						scrub: true,
						pin: true,
						snap: 1 / (sectionsRef.current.length - 1),
						onUpdate: (self) => setActiveIndex(Math.round(self.progress * (sectionsRef.current.length - 1))),
						onEnter: () => timelineRef.current?.classList.remove("translate-y-full"),
						onEnterBack: () => timelineRef.current?.classList.remove("translate-y-full"),
						onLeave: () => timelineRef.current?.classList.add("translate-y-full"),
						onLeaveBack: () => timelineRef.current?.classList.add("translate-y-full"),
					},
				})
			}, containerRef)
			return () => ctx.revert()
		})

		return () => mm.revert()
	}, [])

	return (
		<>
			<section ref={containerRef} className='hidden relative xl:flex bg-white pt-20 h-screen overflow-hidden'>
				<div className='relative my-auto ml-[60px]'>
					<div className='text-[256px] text-accent leading-none'>20</div>
					<div className='top-1/2 -right-1/2 -z-10 absolute border rounded-full size-[494px] -translate-y-1/2 translate-x-1/2'></div>
				</div>

				<div className='top-1/2 relative flex flex-col mr-6 w-full translate-y-[-185px]'>
					{years.map((year, i) => (
						<div
							key={i}
							ref={(el) => {
								if (el) {
									sectionsRef.current[i] = el
								}
							}}
							className='flex justify-between items-center w-full'
						>
							<div
								className={cn(
									"left-4 my-12 text-[256px] leading-none transition-colors duration-[400ms]",
									activeIndex === i ? "text-accent" : "text-gray-color"
								)}
							>
								{year}
							</div>

							{i === 0 && (
								<Block>
									<Title>
										Модернизация пультов управления <br />
										тепловозов в рамках программы <br />
										«Оздоровление парка электровозов и тепловозов»
									</Title>
									<Description>
										В рамках программы ОАО «РЖД» «Оздоровление парка электровозов и тепловозов» наше предприятие
										совместно с ОАО «ВНИКТИ» приняло участие в модернизации пультов управления тепловозов, проходящих
										капитальный ремонт на УЛРЗ и ВТРЗ (филиалы ОАО «Желдорреммаш»).
										<br />
										<br />
										Всего было выпущено пультов и комплектов электрооборудования для 644 секций.
									</Description>
								</Block>
							)}
							{i === 1 && (
								<Block>
									<Title>
										Производство оборудования для магистральных тепловозов 2ТЭ25К «Пересвет» и 2ТЭ25А «Витязь»
									</Title>
									<Description>
										ООО «РАТЕП-ИННОВАЦИЯ» разработало и наладило серийное производство оборудования для магистральных
										тепловозов 2ТЭ25К «ПЕРЕСВЕТ» и 2ТЭ25А «ВИТЯЗЬ», а именно: Унифицированные пульты управления (УПУ);
										Высоковольтные аппаратные камеры; Шкафы с автоматами; Устройства обработки информации (УОИ).
									</Description>
								</Block>
							)}
							{i === 2 && (
								<Block>
									<Title>Серийное производство оборудования для маневровых тепловозов ТЭМ18ДМ и ТЭМ18В</Title>
									<Description>
										ООО «РАТЕП-ИННОВАЦИЯ» совместно с ОАО «ВНИКТИ» разработало и наладило серийный выпуск оборудования
										для маневровых тепловозов ТЭМ18ДМ и ТЭМ18В: Комплект пультов управления; Выпрямители В-ОПЕ; Блоки
										аварийного возбуждения.
										<br />
										<br />
										До конца 2021 года нами будет изготовлено уже более 1500 комплектов. Также предприятие провело
										подготовку к производству высоковольтных камер.
									</Description>
								</Block>
							)}
							{i === 3 && (
								<Block>
									<Title>Пульты управления для тепловозов UzТЕ16М2 (3)</Title>
									<Description>
										ООО «РАТЕП-ИННОВАЦИЯ», по контракту с «Узбекскими железными дорогами», изготовило 88 комплектов
										пультов управления <br /> для магистральных тепловозов UzТЕ16М2(3).
									</Description>
								</Block>
							)}
							{i === 4 && (
								<Block>
									<Title>Производство оборудования для тепловозов 2ТЭ10У и ТЭМ31</Title>
									<Description>
										По контракту с «Белорусскими железными дорогами», наше предприятие изготовило 48 комплектов
										оборудования для модернизации кабины машиниста магистральных тепловозов 2ТЭ10У.
										<br />
										<br />
										Также с 2011 года ООО «РАТЕП-ИННОВАЦИЯ» освоило производство пультов управления маневрового
										тепловоза ТЭМ31 по документации ОАО «ВНИКТИ».
									</Description>
								</Block>
							)}
							{i === 5 && (
								<Block>
									<Title>
										Опытное производство высоковольтных камер <br />и разработка пультов управления для тепловозов
									</Title>
									<Description>
										ООО «РАТЕП-ИННОВАЦИЯ» изготовило опытные комплекты высоковольтных камер для газотурбовоза ГТ1h 002
										(АО «ЛТЗ») и маневрового тепловоза ТЭМ19 (АО «УК «БМЗ») по документации ОАО «ВНИКТИ».
										<br />
										<br />
										Параллельно, совместно с ООО НПП «РОСТ», предприятие начало разработку и дальнейшее производство
										пультов управления для модульной кабины тепловоза ТГ16М.
									</Description>
								</Block>
							)}
							{i === 6 && (
								<Block>
									<Title>
										Разработка и производство высоковольтных камер и пультов управления для тепловоза 2ТЭ25КМ в рамках
										импортозамещения
									</Title>
									<Description>
										В рамках программы импортозамещения по заданию АО «УК «БМЗ» наше предприятие осуществило разработку
										и освоило выпуск высоковольтных камер и пультов управления для тепловоза 2ТЭ25КМ.
									</Description>
								</Block>
							)}
							{i === 7 && (
								<Block>
									<Title>Разработка электрооборудования и пультов управления для тепловоза ТЭМ28</Title>
									<Description>
										Совместно с инженерным центром АО «УК «БМЗ» ООО «РАТЕП-ИННОВАЦИЯ» ведет разработку модуля
										аппаратного, пультов управления (конструктив ЗАО «МЫС») и другого электрооборудования для
										маневрового тепловоза ТЭМ28.
									</Description>
								</Block>
							)}
							{i === 8 && (
								<Block>
									<Title>
										Опытное производство и серийный выпуск оборудования для магистральных тепловозов 2(3)ТЭ25К2М и
										2ТЭ25КМ
									</Title>
									<Description>
										По заказу АО «УК «БМЗ» команда ООО «РАТЕП-ИННОВАЦИЯ» разработала и произвела первые опытные образцы
										продукции для магистрального грузового тепловоза 2(3)ТЭ25К2М: аппаратные камеры, пульт управления и
										панель управления, шкафы пуска дизеля.
										<br />
										<br />
										Также налажено серийное производство электродинамического тормоза для магистрального тепловоза
										2ТЭ25КМ.
									</Description>
								</Block>
							)}
							{i === 9 && (
								<Block>
									<Title>Серийный ремонт и производство оборудования для тепловозов ТЭМ18ДМ и 2ТЭ25А</Title>
									<Description>
										По контакту с Астраханским тепловозоремонтным заводом ООО «РАТЕП-ИННОВАЦИЯ» серийно производит
										средний ремонт комплектов пультов управления, выпрямителей В-ОПЕ и блоков аварийного возбуждения для
										маневрового тепловоза  ТЭМ18ДМ.
										<br />
										<br />
										Также по заказу АО «УК «БМЗ» начато производство ремонта в рамках ТР-600 аппаратных камер и шкафов с
										автоматическими выключателями для магистрального тепловоза 2ТЭ25А.
									</Description>
								</Block>
							)}
							{i === 10 && (
								<Block>
									<Title>Производство и разработка оборудования для тепловозов, электропоездов и вагонов метро</Title>
									<Description>
										ООО «РАТЕП-ИННОВАЦИЯ» наладило выпуск аппаратных камер для ТЭМ14 и 2(3)ТЭ25К3М, разработало
										задатчики управления для ЭП2Тв, начало серийное производство обшивки вагонов метро «Москва» и
										освоило выпуск корпусов подвагонных преобразователей.
									</Description>
								</Block>
							)}
							{i === 11 && (
								<Block>
									<Title>
										Разработка контроллера машиниста
										<br />и модернизация оборудования для тепловозов
									</Title>
									<Description>
										ООО «РАТЕП-ИННОВАЦИЯ» поставило на производство комплект пультового оборудования для ТЭМ10, освоило
										производство потолочной обшивки для вагонов серии 61-4516/4517 (ОАО «ТВЗ») и блоков силовых
										аппаратов для электровозов ЭС5К «Ермак» и ЭС4К «Дончак».
										<br />
										<br />
										Разработан преобразователь сигналов для систем управления тепловозов 2ТЭ25КМ, 2(3)ТЭ25К2М, 3ТЭ25К3М,
										ТЭМ18ДМ и контроллер для рельсового автобуса РА-3.
									</Description>
								</Block>
							)}

							{i === 12 && (
								<Block>
									<Title>Разработка и производство оборудования для тепловозов и ремонт пультов управления</Title>
									<Description>
										ООО «РАТЕП-ИННОВАЦИЯ» разработало опытные комплекты пультового оборудования для ТЭМ23 и поставило на
										серийное производство блоки центрального управления для 2(3)ТЭ25К2М.
										<br />
										<br />
										Производится средний ремонт пультов управления для тепловоза 2ТЭ116У в сотрудничестве с Оренбургским
										и Свердловским заводами.
									</Description>
								</Block>
							)}
							{i === 13 && (
								<Block>
									<Title>
										Производство и разработка оборудования
										<br />
										для тепловозов, электровозов и вагонов
									</Title>
									<Description>
										ООО «РАТЕП-ИННОВАЦИЯ» поставило на производство комплект пультового оборудования для ТЭМ10, освоило
										производство потолочной обшивки для вагонов серии 61-4516/4517 (ОАО «ТВЗ») и блоков силовых
										аппаратов для электровозов ЭС5К «Ермак» и ЭС4К «Дончак».
										<br />
										<br />
										Разработан преобразователь сигналов для систем управления тепловозов 2ТЭ25КМ, 2(3)ТЭ25К2М, 3ТЭ25К3М,
										ТЭМ18ДМ и контроллер для рельсового автобуса РА-3.
									</Description>
								</Block>
							)}
							{i === 14 && (
								<Block>
									<Title>
										Разработка и производство оборудования
										<br />
										для тепловозов и контроллеров машиниста
									</Title>
									<Description>
										Разработан комплект электрооборудования для магистрального тепловоза 2(3)ТЭ28 и контроллеры
										машиниста для поездов «Москва-2020» и «Балтиец».
										<br />
										<br />
										Запущен серийный ремонт пультов управления и аппаратных камер для ТЭП70 (АО «Коломенский завод»).
									</Description>
								</Block>
							)}
						</div>
					))}
				</div>
			</section>
			<Timeline ref={timelineRef} activeIndex={activeIndex} years={years} />
			<section className='xl:hidden flex flex-col bg-white pt-32 pb-28'>
				<YearCarousel years={years} onYearChange={setActiveIndex} />
				<div className='mt-14 ml-4'>
					<List activeIndex={activeIndex} />
				</div>
			</section>
		</>
	)
}

export default ScrollSection
