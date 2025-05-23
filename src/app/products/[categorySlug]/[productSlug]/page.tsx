import { productCategories } from "@/shared/data/products"
import Breadcrumbs from "@/shared/ui-kit/breadcrumbs"
import HeadingSmall from "@/shared/ui-kit/heading/heading-small"
import SectionWrapper from "@/shared/ui-kit/wrappers/section-wrapper"
import ProductImageGallery from "@/widgets/pages/products/electrical-equipment/product/product-image-gallery"
import ProductTable from "@/widgets/pages/products/electrical-equipment/product/product-table"

interface PageProps {
	params: Promise<{
		categorySlug: string
		productSlug: string
	}>
}

const Page = async ({ params }: PageProps) => {
	const { categorySlug, productSlug } = await params
	const category = productCategories.find((cat) => cat.slug === categorySlug)
	const product = category?.products.find((prod) => prod.slug === productSlug)

	if (!category || !product) {
		return <div>Товар не найден</div>
	}

	return (
		<div>
			<SectionWrapper className='relative flex flex-col pt-10 overflow-hidden'>
				<Breadcrumbs />
				<div className='mt-8'>
					<HeadingSmall>{product.name}</HeadingSmall>
					<p className='mt-5 max-w-[766px] text-black-60 text-sm leading-tight'>{product.fullDescription}</p>
				</div>
			</SectionWrapper>
			<ProductImageGallery images={product.images} productName={product.name} />
			<SectionWrapper className='mt-[90px]'>
				<h2 className='text-[32px] md:text-[56px] leading-none md:leading-none tracking-tight'>
					Таблица <br /> применяемости
				</h2>
			</SectionWrapper>
			<ProductTable items={product.children || []} />
		</div>
	)
}

export default Page
