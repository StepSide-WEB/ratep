import { ReactNode } from "react"

const Block = ({ children }: { children: ReactNode }) => {
	return <article className='py-9 xl:border-b max-w-[309px] sm:max-w-[593px]'>{children}</article>
}

const Title = ({ children }: { children: ReactNode }) => {
	return <p className='text-sm sm:text-2xl leading-[1.3] sm:leading-[1.15]'>{children}</p>
}

const Description = ({ children }: { children: ReactNode }) => {
	return <p className='opacity-70 mt-4 sm:mt-6 text-xs sm:text-base leading-[1.15] sm:leading-snug'>{children}</p>
}

export { Block, Title, Description }
