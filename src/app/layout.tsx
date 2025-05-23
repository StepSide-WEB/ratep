import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.scss"
import Header from "@/widgets/navigation/header"
import { ProgressBarProvider } from "react-transition-progress"
import PagePreloader from "@/shared/ui-kit/page-preloader"
import Footer from "@/widgets/navigation/footer"
import LenisProvider from "./lenis-provider"

const suisseIntl = localFont({
	src: [
		{ path: "./fonts/SuisseIntl-Book.ttf", weight: "450" },
		{ path: "./fonts/SuisseIntl-Medium.ttf", weight: "500" },
	],
	variable: "--font-suisse",
})

export const metadata: Metadata = {
	title: "Ratep",
	description: "Ratep — Создаём инновации для российского рынка",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${suisseIntl.className} ${suisseIntl.variable} antialiased`}>
				<LenisProvider>
					<ProgressBarProvider>
						<PagePreloader />
						<Header />
						<main className='mx-auto pt-14 max-w-[1600px]'>{children}</main>
						<Footer />
					</ProgressBarProvider>
				</LenisProvider>
			</body>
		</html>
	)
}
