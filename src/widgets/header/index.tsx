import ButtonPrimary from "@/shared/ui-kit/buttons/button-primary"
import ArrowRight from "@/shared/ui-kit/icons/arrow-right"
import Logo from "@/shared/ui-kit/icons/logo"
import { ProgressBar } from "react-transition-progress"
import { Link } from "react-transition-progress/next"
import s from "./index.module.scss"
import { cn } from "@/shared/lib/utils"
import Checkbox from "./checkbox"
import Items from "./items"

const Header = () => {
	return (
		<header
			className={cn(
				"fixed flex left-1/2 z-30 bg-white -translate-x-1/2 max-w-[1600px] justify-between border-b w-full min-h-14 font-medium text-base leading-[0.9] -tracking-[.015em]",
				s.Header
			)}
		>
			<ProgressBar className='top-0 left-0 z-40 absolute bg-accent h-1' />
			<div className='flex items-center'>
				<div className='flex items-center px-6 border-r h-full'>
					<Link href='/'>
						<Logo />
					</Link>
				</div>
				<Items className='hidden xl:flex' />
			</div>
			<div className='hidden xl:flex items-center gap-x-6'>
				<p className='max-h-3'>+7 (800) 201–8425</p>
				<ButtonPrimary className='border-l'>
					<span className='max-h-3'>Оставить заявку</span>
					<ArrowRight className='top-0.5 relative' />
				</ButtonPrimary>
			</div>
			<div className='xl:hidden z-20 flex items-center px-6 border-l'>
				<Checkbox />
				<Items
					className={cn(
						"flex absolute left-0 top-14 flex-col items-start text-lg min-h-screen w-full",
						s.MenuContainer
					)}
				/>
			</div>
		</header>
	)
}

export default Header
