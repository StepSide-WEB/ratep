import { cn } from "@/shared/lib/utils"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"

type ProductItem = {
	id: number
	name: string
	decimalCode: string
	loco: string | string[]
}

type ProductTableProps = {
	items: ProductItem[]
}

const ProductTable = ({ items }: ProductTableProps) => {
	return (
		<SectionWrapper className='mb-[120px] pr-0 sm:pr-0 lg:pr-6'>
			<div className='mt-8 overflow-x-auto'>
				<table className='min-w-full text-left whitespace-nowrap border-collapse table-auto'>
					<thead>
						<tr className='opacity-50 border-b text-sm'>
							<th className='left-0 z-10 sticky bg-white p-4 lg:p-6 min-w-[150px]'>
								<div className='lg:hidden top-0 right-0 absolute shadow-[4px_0_6px_-2px_rgba(0,0,0,1)] bg-border w-[1px] h-full'></div>
								Наименование
							</th>
							<th className='bg-light-gray lg:bg-transparent p-4 lg:p-6 min-w-[150px]'>Дец. № или код</th>
							<th className='bg-light-gray lg:bg-transparent p-4 lg:p-6 min-w-[150px]'>Локомотивы</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item, n) => (
							<tr
								key={item.id}
								className={cn(
									"overflow-hidden font-medium text-black text-lg lg:border-b",
									n !== items.length - 1 && "border-b"
								)}
							>
								<td className='left-0 z-10 sticky bg-white p-4 lg:p-6 min-w-[150px]'>
									<div className='lg:hidden top-0 right-0 absolute shadow-[4px_0_6px_-2px_rgba(0,0,0,1)] bg-border w-[1px] h-full'></div>
									{item.name}
								</td>
								<td className='bg-light-gray lg:bg-transparent p-4 lg:p-6 min-w-[150px]'>{item.decimalCode}</td>
								<td className='bg-light-gray lg:bg-transparent p-4 lg:p-6 min-w-[150px]'>
									{Array.isArray(item.loco) ? item.loco.join(", ") : item.loco}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</SectionWrapper>
	)
}

export default ProductTable
