import { cn } from "@/shared/lib/utils"
import s from "./index.module.scss"
import Hero from "@/widgets/company/history/hero"
import ScrollSection from "@/widgets/company/history/scroll-section"

const Page = () => {
	return (
		<>
			<Hero />
			<section className={cn("relative h-[100svh]", s.ParallaxVideo)}>
				<video autoPlay muted loop>
					<source src='/company/history/hero.mp4' type='video/mp4' />
				</video>
			</section>
			<ScrollSection />
		</>
	)
}

export default Page
