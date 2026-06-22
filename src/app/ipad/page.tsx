import ProductHeroSection from '@/components/features/ProductHeroSection'
import Products from '@/components/features/allProducts'
import allProductsData from '@/data/allproducts.json'
import ProductCards from '../../components/features/ProductCards';
import Loop from './components/Loop';
import IpadEssentials from './components/IpadEssentials';

const iPadKnowData = [
    { id: "apps", title: "iPadOS + Apps", subtitle: "Flexible windowing. A multitasker's delight.", image: "/knowipad/img1.jpg" },
    { id: "appleIntelligence", title: "Apple Intelligence", subtitle: "Effortlessly helpful every day.", image: "/knowipad/img2.jpg" },
    { id: "pencil", title: "Apple Pencil", subtitle: "Dream it up. Jot it down.", image: "/knowipad/img3.jpg" },
    { id: "creativity", title: "Creativity", subtitle: "Take your inner artist out and about.", image: "/knowipad/img4.jpg" },
    { id: "learning", title: "Learning", subtitle: "Your classroom can be anywhere.", image: "/knowipad/img5.jpg" },
    { id: "entertainment", title: "Entertainment", subtitle: "Kick back. Tune in. Game on.", image: "/knowipad/img6.jpg" },
];

export default function IphonePage() {
    const ipadModels = allProductsData.ipad;

    const expandedProducts = ipadModels.flatMap(product =>
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
    )

    const shuffledProducts = [...expandedProducts].sort(() => Math.random() - 0.5);

    return (
        <>
            <ProductHeroSection category="ipad" />
            <Products products={shuffledProducts} categoryPath='iPad' />
            <ProductCards sectionTitle="Get to know iPad" cards={iPadKnowData} category='ipad' />
            <Loop />
            <IpadEssentials />
        </>
    )
}