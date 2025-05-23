"use client"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { productCategories } from "@/shared/data/products"
import { menuItems } from "@/widgets/navigation/constants"
import { Link } from "react-transition-progress/next"

const Breadcrumbs = ({ className }: { className?: string }) => {
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
		const matched = menuItems.flatMap((section) => section.links).find((link) => link.href === pathname)
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
					!isLast && "text-black-60 hover:underline"
				)
				return (
					<span key={i} className='flex items-center gap-x-2'>
						{i !== 0 && <span className='text-black-60'>/</span>}
						{isLast ? (
							<span className='whitespace-nowrap'>{crumb.label}</span>
						) : (
							<Link href={crumb.href} className={labelClasses}>
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
