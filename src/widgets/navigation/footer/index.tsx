import { cn } from "@/shared/lib/utils"
import Logo from "@/shared/ui-kit/icons/logo"
import { Link } from "react-transition-progress/next"
import s from "./index.module.scss"
import ToTop from "./to-top"
import { menuItems } from "../constants"

const Footer = () => {
	return (
		<footer
			className={cn(
				"flex 2md:flex-row flex-col max-w-[1600px] mx-auto bg-white justify-between gap-x-20 gap-y-14 px-4 sm:px-6 pt-8 pb-[125px] border-t sm:border-t-0 sm:border-b",
				s.Footer
			)}
		>
			<Logo />
			<div className='flex flex-wrap gap-x-16 gap-y-9 leading-[1.3]'>
				<div className='flex flex-col gap-y-9'>
					<div>
						<p className='pb-5 text-[#00122E66] text-sm'>Контактные данные</p>
						<div className='flex flex-col gap-y-3 font-medium text-base'>
							<p className='leading-[1.3]'>8 (800) 201-84-25</p>
							<p className='leading-[1.3]'>info@ratep-inn.ru</p>
						</div>
					</div>
					<div>
						<p className='pb-5 text-[#00122E66] text-sm'>Адрес</p>
						<div className='flex flex-col gap-y-4 font-medium text-base'>
							<p>
								142201, Московская область, <br />
								г. Серпухов, ул. Коншиных, д. 108
							</p>
						</div>
					</div>
				</div>
				<div>
					<p className='pb-5 text-[#00122E66] text-sm'>Продукция</p>
					<div className='flex flex-col gap-y-3 font-medium text-base'>
						{menuItems
							.find((i) => i.key === "products")
							?.links.map((i) => (
								<Link key={i.label} href={i.href} className='max-w-[250px] leading-[1.3]'>
									{i.label}
								</Link>
							))}
					</div>
				</div>
				<div>
					<p className='pb-5 text-[#00122E66] text-sm'>Компания</p>
					<div className='flex flex-col gap-y-3 font-medium text-base'>
						{menuItems
							.find((i) => i.key === "company")
							?.links.map((i) => (
								<Link key={i.label} href={i.href} className='max-w-[250px] leading-[1.3]'>
									{i.label}
								</Link>
							))}
					</div>
				</div>
				<div className='flex flex-col gap-y-9'>
					<div>
						<p className='pb-5 text-[#00122E66] text-sm'>Услуги</p>
						<div className='flex flex-col gap-y-3 font-medium text-base'>
							{menuItems
								.find((i) => i.key === "services")
								?.links.map((i) => (
									<Link key={i.label} href={i.href} className='max-w-[250px] leading-[1.3]'>
										{i.label}
									</Link>
								))}
						</div>
					</div>
					<div>
						<p className='pb-5 text-[#00122E66] text-sm'>Документация</p>
						<div className='flex flex-col gap-y-3 font-medium text-base'>
							<Link href='#' className='leading-[1.3]'>
								Конфиденциальность
							</Link>
							<Link href='#' className='leading-[1.3]'>
								Охрана условий труда
							</Link>
							<Link href='#' className='leading-[1.3]'>
								Менеджмент качества
							</Link>
						</div>
					</div>
				</div>
			</div>
			<ToTop />
		</footer>
	)
}

export default Footer
