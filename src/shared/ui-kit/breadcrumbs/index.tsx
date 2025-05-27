"use client"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { productCategories } from "@/shared/data/products"
import { Link } from "react-transition-progress/next"
import { navigationItems } from "@/shared/lib/constants/navigation"
import { cn } from "@/shared/lib/utils"

type Mode = "light" | "dark"

const Breadcrumbs = ({ className, mode = "dark" }: { className?: string; mode?: Mode }) => {
	const pathname = usePathname()
	const segments = pathname.split("/").filter(Boolean)

	const crumbs: { label: string; href: string; isLast?: boolean }[] = []
	crumbs.push({ label: "Главная", href: "/" })

	if (segments[0] === "products") {
		const categorySlug = segments[1]
		const category = productCategories.find((cat) => cat.slug === categorySlug)

		if (category) {
			crumbs.push({
				label: category.title,
				href: `/products/${category.slug}`,
				isLast: segments.length === 2,
			})
			const productSlug = segments[2]
			if (productSlug) {
				const product = category.products.find((prod) => prod.slug === productSlug)
				if (product) {
					crumbs.push({
						label: product.name,
						href: `/products/${category.slug}/${product.slug}`,
						isLast: true,
					})
				}
			}
		}
	} else {
		const matched = navigationItems.flatMap((section) => section.links).find((link) => link.href === pathname)
		if (matched) {
			crumbs.push({
				label: matched.label,
				href: matched.href,
				isLast: true,
			})
		}
	}

	return (
		<div className={clsx("flex gap-x-2 overflow-x-auto text-sm", className)}>
			{crumbs.map((crumb, i) => {
				const isLast = crumb.isLast || i === crumbs.length - 1
				const labelClasses = clsx(
					"whitespace-nowrap",
					!isLast && "max-w-[100px] truncate sm:max-w-none",
					!isLast && "hover:underline",
					mode === "light" ? "text-white-60" : "text-black-60"
				)
				return (
					<span key={i} className='flex items-center gap-x-2'>
						{i !== 0 && <span className={cn(mode === "light" ? "text-white-60" : "text-black-60")}>/</span>}
						{isLast ? (
							<span className={cn(mode === "light" ? "text-white" : "text-black", "whitespace-nowrap")}>
								{crumb.label}
							</span>
						) : (
							<Link href={crumb.href} className={cn(mode === "light" ? "text-white-60" : "text-black", labelClasses)}>
								{crumb.label}
							</Link>
						)}
					</span>
				)
			})}
		</div>
	)
}

export default Breadcrumbs
