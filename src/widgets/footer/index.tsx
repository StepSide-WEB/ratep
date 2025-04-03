import { cn } from "@/shared/lib/utils"
import ArrowDown from "@/shared/ui-kit/icons/arrow-down"
import Logo from "@/shared/ui-kit/icons/logo"
import { Link } from "react-transition-progress/next"
import s from "./index.module.scss"

const Footer = () => {
	return (
		<footer
			className={cn(
				"flex 2md:flex-row flex-col justify-between gap-x-20 gap-y-14 sm:mt-[90px] mb-14 px-4 sm:px-6 pt-8 pb-[125px] border-t sm:border-t-0 sm:border-b",
				s.Footer
			)}
		>
			<Logo className='size-16' />
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
						<Link href='#' className='leading-[1.3]'>
							Электрооборудование
							<br />
							для подвижного состава
						</Link>
						<Link href='#' className='leading-[1.3]'>
							Интерьеры
							<br />
							рельсового транспорта
						</Link>
						<Link href='#' className='leading-[1.3]'>
							Электротехнические
							<br />
							шины и токоотвод
						</Link>
						<Link href='#' className='leading-[1.3]'>
							Телекоммуникационные <br />
							стойки и шкафы
						</Link>
					</div>
				</div>
				<div>
					<p className='pb-5 text-[#00122E66] text-sm'>Компания</p>
					<div className='flex flex-col gap-y-3 font-medium text-base'>
						<Link href='#' className='leading-[1.3]'>
							История
						</Link>
						<Link href='#' className='leading-[1.3]'>
							Вакансии
						</Link>
						<Link href='#' className='leading-[1.3]'>
							Производство
						</Link>
						<Link href='#' className='leading-[1.3]'>
							Миссия
						</Link>
						<Link href='#' className='leading-[1.3]'>
							Бережливое произ-во
						</Link>
						<Link href='#' className='leading-[1.3]'>
							Сот-во с уч. заведениями
						</Link>
						<Link href='#' className='leading-[1.3]'>
							Новости предприятия
						</Link>
					</div>
				</div>
				<div className='flex flex-col gap-y-9'>
					<div>
						<p className='pb-5 text-[#00122E66] text-sm'>Услуги</p>
						<div className='flex flex-col gap-y-3 font-medium text-base'>
							<Link href='#' className='leading-[1.3]'>
								Контрактное производство
							</Link>
							<Link href='#' className='leading-[1.3]'>
								Гарантийное обслуживание
							</Link>
							<Link href='#' className='leading-[1.3]'>
								Ремонт оборудования
							</Link>
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
			<div className='hidden 2md:flex justify-center items-center bg-[#F8F8F9] hover:bg-[#00122E] [&>*]:hover:stroke-white rounded-full size-11 transition duration-200 cursor-pointer'>
				<ArrowDown className='size-4 rotate-180' />
			</div>
		</footer>
	)
}

export default Footer
