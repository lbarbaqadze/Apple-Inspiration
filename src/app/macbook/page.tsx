import ProductHeroSection from '@/components/features/ProductHeroSection'
import Products from '@/components/features/allProducts'
import allProductsData from '@/data/allproducts.json'
import ProductCards from '../../components/features/ProductCards'
import { Hero } from './components/Hero'
import ModernFeatures from './components/Features'

const MacBookKnowData = [
    { id: "performance", title: "Performance and Battery Life", subtitle: "Go fast. Go far.", image: "/knowmacbook/img1.jpg" },
    { id: "al", title: "Built for Al", subtitle: "Smart. Secure. On device.", image: "/knowmacbook/img2.jpg" },
    { id: "intelligence", title: "macOS and Apple Intelligence", subtitle: "Easy to use. Easy to love", image: "/knowmacbook/img3.jpg", color: "text-black" },
    { id: "mac", title: "Mac + iPhone", subtitle: "Together they work wonders.", image: "/knowmacbook/img4.jpg", color: "text-black" },
    { id: "compatibility", title: "Compatibility", subtitle: "Mac runs your favorite apps.", image: "/knowmacbook/img5.jpg", color: "text-black" },
    { id: "privacy", title: "Privacy and Security", subtitle: "Your business is nobody else's.", image: "/knowmacbook/img6.jpg" },
    { id: "durability", title: "Durability", subtitle: "Built to stand the test of time.", image: "/knowmacbook/img7.jpg" },
    { id: "values", title: "Apple Values", subtitle: "Our values drive everything we do.", image: "/knowmacbook/img8.jpg", color: "text-black" }
];

export default function MacbookPage() {

    const macbookModels = allProductsData.macbook

    const expandedProducts = macbookModels.flatMap(product =>
        product.colors.flatMap(color =>
            product.storageOptions.map(storage => ({
                id: `${product.id}-${color.name}-${storage.size}`,
                name: product.name,
                specs: `${color.name} • ${storage.size}`,
                price: `$${parseInt(product.price.replace('$', '')) + storage.priceModifier}`,
                img: color.images[0],
                hex: color.hex
            }))
        )
    );

    const shuffledProducts = [...expandedProducts].sort(() => Math.random() - 0.5);

    return (
        <>
            <ProductHeroSection category="macbook" />
            <Products products={shuffledProducts} categoryPath='MacBook' />
            <ProductCards sectionTitle="Get to know MacBook" cards={MacBookKnowData} category='macbook' />            
            <Hero />
            <ModernFeatures />
        </>
    )
}
