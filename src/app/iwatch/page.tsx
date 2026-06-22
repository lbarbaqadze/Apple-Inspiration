import ProductHeroSection from '@/components/features/ProductHeroSection'
import Products from '@/components/features/allProducts'
import allProductsData from '@/data/allproducts.json'
import ProductCards from '../../components/features/ProductCards'
import WatchUpgrades from './components/WatchUpgrades'
import WatchFeatures from './components/WatchFeatures'

const iWatchKnowData = [
    { id: "health", title: "Health", subtitle: "Knows you. Insights and out.", image: "/knowiwatch/img1.jpg" },
    { id: "fitness", title: "Fitness", subtitle: "Miles of motivation.", image: "/knowiwatch/img2.jpg" },
    { id: "safety", title: "Safety", subtitle: "Keep help close at hand.", image: "/knowiwatch/img3.jpg", color: "text-black" },
    { id: "watch", title: "Apple Watch Ultra 3", subtitle: "The ultimate sports and adventure watch.", image: "/knowiwatch/img4.jpg", color: "text-black" },
    { id: "connectivity", title: "Connectivity", subtitle: "The right call for staying in touch.", image: "/knowiwatch/img5.jpg", color: "text-black" },
    { id: "personalization", title: "Personalization", subtitle: "Make it you-nique.", image: "/knowiwatch/img6.jpg", color: "text-black" },
    { id: "kids", title: "Apple Watch For Your Kids", subtitle: "Independence for them.", image: "/knowiwatch/img7.jpg", color: "text-black" },
    { id: "duo", title: "Apple Watch + iPhone", subtitle: "Dynamic duo.", image: "/knowiwatch/img8.jpg", color: "text-black" },
];

export default function IwatchPage() {

    const iwatchModels = allProductsData.iwatch

    const expandedProducts = iwatchModels.flatMap(product =>
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
            <ProductHeroSection category="iwatch" />
            <Products products={shuffledProducts} categoryPath='iWatch' />
            <ProductCards sectionTitle="Get to know iWatch" cards={iWatchKnowData} category='iwatch' />
            <WatchUpgrades />
            <WatchFeatures />
        </>
    )
}
