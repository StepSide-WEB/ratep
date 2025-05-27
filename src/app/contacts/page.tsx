"use client"
import Heading from "@/shared/ui-kit/heading"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"
import { ReactNode, useEffect, useState } from "react"
import { Link } from "react-transition-progress/next"
import { format } from "date-fns"
import { toZonedTime } from "date-fns-tz"
import Map from "@/shared/ui-kit/map"

type ContactItem = {
	label: string
	content: ReactNode[]
}

const useMoscowTime = () => {
	const [time, setTime] = useState("Загрузка...")
	useEffect(() => {
		const updateTime = () => {
			const now = new Date()
			const moscowTime = toZonedTime(now, "Europe/Moscow")
			const formatted = format(moscowTime, "HH:mm")
			setTime(`${formatted} GMT +3`)
		}
		updateTime()
		const interval = setInterval(updateTime, 60 * 1000)
		return () => clearInterval(interval)
	}, [])
	return time
}

const Page = () => {
	const moscowTime = useMoscowTime()

	const contacts: ContactItem[] = [
		{
			label: "Контактные данные",
			content: [
				<p key='email'>info@ratep-inn.ru</p>,
				<p key='phone' className='mt-2'>
					+7 (495) 212-0557
				</p>,
			],
		},
		{
			label: "Адрес",
			content: [
				<p key='address'>
					ООО «РАТЕП ИННОВАЦИЯ»,
					<br />
					142201, Московская область,
					<br />
					г. Серпухов, ул. Коншиных, д. 108
				</p>,
			],
		},
		{
			label: "Отдел продаж, отдел рекламаций",
			content: [<p key='sales'>sales@ratep-inn.ru</p>],
		},
		{
			label: "Отдел снабжения",
			content: [<p key='omts'>omts@ratep-inn.ru</p>],
		},
		{
			label: "Технический отдел",
			content: [<p key='tech'>to@ratep-inn.ru</p>],
		},
		{
			label: "Отдел по управлению персоналом",
			content: [<p key='hr-email'>pev@ratep-inn.ru</p>, <p key='hr-phone'>+7 (800) 200-88-18</p>],
		},
		{
			label: "Бюро сервисного обслуживания",
			content: [<p key='buro-email'>kss@ratep-inn.ru</p>, <p key='buro-phone'>+7 (800) 555-92-18</p>],
		},
		{
			label: "Предприятие",
			content: [
				<Link className='underline' href='#' key='passport'>
					Паспорт предприятия 0.2 MB
				</Link>,
			],
		},
		{
			label: "Местное время",
			content: [<p key='time'>{moscowTime}</p>],
		},
	]

	return (
		<>
			<SectionWrapper className='flex flex-col pt-10 lg:pt-24 pb-[100px] lg:pb-[162px] background-linear'>
				<div>
					<Heading>Контакты</Heading>
					<p className='hidden sm:block opacity-50 mt-3 text-sm'>
						Работаем с 08:00 до 17:00. Суббота, воскресенье — выходные.
					</p>
					<p className='sm:hidden block opacity-50 mt-3 text-sm leading-[1.3]'>
						Работаем с 08:00 до 17:00
						<br />
						Суббота, воскресенье — выходные.
					</p>
				</div>

				<div className='gap-8 sm:gap-10 grid grid-cols-1 sm:grid-cols-2 mt-12 xl:mt-0 xl:ml-auto lg:min-w-[660px] text-base md:text-lg leading-none tracking-[-0.015em]'>
					{contacts.map(({ label, content }) => (
						<div key={label} className='flex flex-col gap-y-2 md:gap-y-4'>
							<p className='opacity-40 text-sm'>{label}</p>
							<div className='space-y-2 font-medium'>{content}</div>
						</div>
					))}
				</div>
			</SectionWrapper>
			<Map />
		</>
	)
}

export default Page
