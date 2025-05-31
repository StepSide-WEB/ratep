import { categorySlugs } from "@/shared/lib/constants/slugs"

type HeaderLink = {
	label: string
	href: string
}

type HeaderItem = {
	key: HeaderItemKey
	label: string
	links: HeaderLink[]
}

type HeaderItemKey = "products" | "company" | "services" | "docs"

export const headerItems: HeaderItem[] = [
	{
		key: "products",
		label: "Продукция",
		links: [
			{ label: "Электрооборудование для подвижного состава", href: "/products/" + categorySlugs.electricalEquipment },
			{ label: "Интерьеры рельсового транспорта", href: "/products/" + categorySlugs.interiors },
			{ label: "Электротехнические шины и токоотвод", href: "/products/" + categorySlugs.busbars },
			{ label: "Телекоммуникационные стойки и шкафы", href: "/products/" + categorySlugs.telecomСabinets },
			{ label: "Продажа неликвидов", href: "/products/" + categorySlugs.surplusSale },
		],
	},
	{
		key: "company",
		label: "Компания",
		links: [
			{ label: "История", href: "/company/history" },
			{ label: "Вакансии", href: "/company/careers" },
			{ label: "Производство", href: "/company/production" },
			{ label: "Миссия", href: "/company/mission" },
			{ label: "Бережливое производство", href: "/company/lean-production" },
			{ label: "Сотрудничество с учебными заведениями", href: "/company/education-partnerships" },
			{ label: "Новости предприятия", href: "/company/internal-news" },
		],
	},
	{
		key: "services",
		label: "Услуги",
		links: [
			{ label: "Контрактное производство", href: "/services/contract-manufacturing" },
			{ label: "Гарантийное обслуживание", href: "/services/warranty" },
			{ label: "Ремонт оборудования", href: "/services/repair" },
		],
	},
]

export const navigationItems: HeaderItem[] = [
	...headerItems,
	{
		key: "docs",
		label: "Документация",
		links: [
			{ label: "Конфиденциальность", href: "/docs/privacy-policy" },
			{ label: "Оценка условий труда", href: "/docs/labor-protection" },
			{ label: "Менеджмент качества", href: "/docs/quality-management" },
		],
	},
]
