import Image from "next/image"
import Link from "next/link"
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Images = [
    { id: 1, name: "iPhone", img: "/support-images/iphone.png", href: "/iphone" },
    { id: 2, name: "MacBook", img: "/support-images/macbook.png", href: "/macbook" },
    { id: 3, name: "iPad", img: "/support-images/ipad.png", href: "/ipad" },
    { id: 4, name: "iWatch", img: "/support-images/watch.png", href: "/iwatch" },
]

export default function MainHero() {
    return (
        <section className='w-full bg-black text-white h-auto py-20 flex items-center justify-center'>
            <div className='flex items-center justify-center flex-col gap-y-5'>
                <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faApple} className="text-black text-[55px]" />
                </div>
                <h1 className="md:text-5xl text-4xl font-bold">Apple Support</h1>
                <h3 className="text-xl font-extralight">Need help? Start here.</h3>
                <div className="sm:flex flex-wrap items-center justify-center gap-8 mt-12 grid grid-cols-2">
                    {Images.map((item) => (
                        <Link key={item.id} href={item.href} className="flex flex-col items-center gap-3 group">
                            <div className="relative w-24 h-24 transition-transform duration-300 group-hover:scale-110">
                                <Image 
                                    src={item.img} 
                                    alt="Device" 
                                    fill 
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm text-zinc-400 group-hover:text-white transition-colors capitalize">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
