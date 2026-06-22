import HomeLanding from '@/components/features/HomeLanding'
import Products from '@/components/features/Products'
import products from "@/data/products.json"
import MainPageHero from '@/components/features/MainPageHero'
import Slider from '@/components/ui/Slider'
import Features from '@/components/features/Features'

export default function Home() {

  const iphone = products.iphone
  const macbook = products.macbook
  const iwatch = products.iwatch
  const ipad = products.ipad


  return (
    <>
      <HomeLanding />
      <Products
        products={iphone}
        title="iPhone"
      />
      <Products
        products={macbook}
        title="MacBook"
      />
      <Products
        products={iwatch}
        title="iWatch"
      />
      <Products
        products={ipad}
        title="iPad"
      />
      <MainPageHero />      
      <Features />
      <Slider />

    </>
  )
}
