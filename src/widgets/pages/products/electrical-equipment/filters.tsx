"use client"
import { productCategories } from "@/shared/data/products"
import { categorySlugs } from "@/shared/lib/constants"
import ButtonPrimary from "@/shared/ui-kit/buttons/button-primary"
import InputFilter from "@/shared/ui-kit/inputs/input-filter"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"
import Image from "next/image"
import { useState } from "react"
import { Link } from "react-transition-progress/next"

const Filters = () => {
	const [selected, setSelected] = useState("")
	const [filterMode, setFilterMode] = useState<"loco" | "decimal">("loco")

	const electricalCategory = productCategories.find((i) => i.slug === categorySlugs.electricalEquipment)

	// Собираем все дочерние элементы всех продуктов
	const allChildren = electricalCategory?.products.flatMap((product) => product.children ?? []) ?? []

	// Получаем уникальные значения loco и decimalCode
	const uniqueLocos = [...new Set(allChildren.flatMap((child) => child.loco))]
	const uniqueDecimals = [...new Set(allChildren.map((child) => child.decimalCode))]

	// Выбор опций в зависимости от режима фильтра
	const options = (filterMode === "loco" ? uniqueLocos : uniqueDecimals).map((value) => ({
		label: value,
		value: value,
	}))

	const filteredProducts = electricalCategory?.products.filter((product) => {
		if (!selected) return true
		if (!product.children) return false
		return product.children.some((child) => {
			if (filterMode === "loco") {
				return child.loco.includes(selected)
			} else {
				return child.decimalCode.includes(selected)
			}
		})
	})

	return (
		<>
			<SectionWrapper className='flex xl:flex-row flex-col gap-x-4 gap-y-6 mt-6'>
				<div className='flex md:flex-row flex-col gap-2 w-full'>
					<ButtonPrimary
						isActive={filterMode === "loco"}
						className='justify-start w-full leading-none'
						onClick={() => {
							setFilterMode("loco")
							setSelected("")
						}}
					>
						<span className='h-3'>Поиск по типу локомотива</span>
					</ButtonPrimary>
					<ButtonPrimary
						isOutline={filterMode !== "decimal"}
						isActive={filterMode === "decimal"}
						className='justify-start w-full leading-none'
						onClick={() => {
							setFilterMode("decimal")
							setSelected("")
						}}
					>
						<span className='h-3'>Поиск по децимальному номеру</span>
					</ButtonPrimary>
				</div>
				<InputFilter
					className='w-full'
					options={options}
					value={selected}
					onChange={setSelected}
					placeholder={filterMode === "loco" ? "Выберите тип локомотива" : "Выберите децимальный номер"}
					mode={filterMode === "decimal" ? "search" : "select"}
				/>
			</SectionWrapper>
			<SectionWrapper className='mt-10'>
				<div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
					{filteredProducts?.map((i) => (
						<Link
							href={`/products/${categorySlugs.electricalEquipment}/${i.slug}`}
							key={i.id}
							className='bg-light-gray hover:bg-dark-gray p-5 leading-none transition'
						>
							<p className='text-base md:text-xl tracking-[-0.015em]'>{i.name}</p>
							<p className='mt-2 max-w-[500px] text-black-60 text-sm'>{i.shortDescription}</p>
							{i.images?.[0] && (
								<Image
									className='mt-6 md:mt-10 w-full h-[230px] md:h-[340px] object-contain'
									alt={i.name}
									src={i.images[0]}
									width={1920}
									height={1080}
								/>
							)}
						</Link>
					))}
					{filteredProducts?.length === 0 && (
						<p className='text-black-40 text-sm'>Нет товаров по выбранному фильтру.</p>
					)}
				</div>
			</SectionWrapper>
		</>
	)
}

export default Filters
