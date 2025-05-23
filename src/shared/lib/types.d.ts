import { categorySlugs, productSlugs } from "./constants"

export type CategorySlugs = (typeof categorySlugs)[keyof typeof categorySlugs]
export type ProductSlugs = (typeof productSlugs)[keyof typeof productSlugs]
