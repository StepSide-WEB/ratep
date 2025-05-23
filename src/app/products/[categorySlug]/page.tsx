import { notFound } from "next/navigation"
import { CategorySlugs } from "@/shared/lib/types"
import ElectricalEquipment from "@/widgets/pages/products/electrical-equipment"
import Interiors from "@/widgets/pages/products/interiors"
import Busbars from "@/widgets/pages/products/busbars"
import TelecomCabinets from "@/widgets/pages/products/telecom-cabinets"
import SurplusSale from "@/widgets/pages/products/surplus-sale"

interface PageProps {
	params: Promise<{
		categorySlug: string
	}>
}

const Page = async ({ params }: PageProps) => {
	const { categorySlug } = await params
	const slug = categorySlug as CategorySlugs

	switch (slug) {
		case "electrical-equipment":
			return <ElectricalEquipment />
		case "interiors":
			return <Interiors />
		case "busbars":
			return <Busbars />
		case "telecom-cabinets":
			return <TelecomCabinets />
		case "surplus-sale":
			return <SurplusSale />
		default:
			notFound()
	}
}

export default Page
