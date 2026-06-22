import ProductHero from '@/components/features/ProductHero'
import { productHeroConfigs, type ProductCategory } from '@/data/productHeroData'

type ProductHeroSectionProps = {
    category: ProductCategory
}

export default function ProductHeroSection({ category }: ProductHeroSectionProps) {
    const config = productHeroConfigs[category]

    return (
        <ProductHero
            title={config.title}
            ctaHref={config.ctaHref}
            variants={config.variants}
            sectionTitle={config.sectionTitle}
        />
    )
}
