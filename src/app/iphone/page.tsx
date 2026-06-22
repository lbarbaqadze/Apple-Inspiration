import ProductHeroSection from '@/components/features/ProductHeroSection'
import Products from '@/components/features/allProducts'
import allProductsData from '@/data/allproducts.json'
import SignificantOthers from './components/SignificantOthers';
import ProductCards from '../../components/features/ProductCards';
import IPhoneShowcase from './components/IphoneShowCase';

const iPhoneKnowData = [
    { id: "innovation", title: "Innovation", subtitle: "Beautiful and durable, by design.", image: "/knowiphone/img1.jpg" },
    { id: "cameras", title: "Cutting-Edge Cameras", subtitle: "Picture your best photos and videos.", image: "/knowiphone/img2.jpg" },
    { id: "chip", title: "Chip and Battery Life", subtitle: "Fast that lasts.", image: "/knowiphone/img3.jpg" },
    { id: "ios", title: "iOS and Apple Intelligence", subtitle: "New look. Even more magic.", image: "/knowiphone/img4.jpg" },
    { id: "environment", title: "Environment", subtitle: "Designed with the earth in mind.", image: "/knowiphone/img5.jpg" },
    { id: "privacy", title: "Privacy", subtitle: "Your data. Just where you want it.", image: "/knowiphone/img6.jpg" }
];

export default function IphonePage() {
    const iphoneModels = allProductsData.iphone;

    const expandedProducts = iphoneModels.flatMap(product =>
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
            <ProductHeroSection category="iphone" />
            <Products products={shuffledProducts} categoryPath='iPhone' />
            <ProductCards sectionTitle="Get to know iPhone" cards={iPhoneKnowData} category='iphone' />
            <SignificantOthers />
            <IPhoneShowcase />
        </>
    )
}