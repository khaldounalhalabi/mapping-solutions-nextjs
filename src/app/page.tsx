import Navbar from "@/components/Navbar/Navbar";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import AboutUsWidget from "@/components/AboutUsWidget/AboutUsWidget";
import ProductCard from "@/components/ProductCard/ProductCard";
import ColoredLine from "@/components/Utilities/ColoredLine";
import ServicesWidget from "@/components/ServicesWidget/ServicesWidget";
import Link from "next/link";
import {AiOutlineArrowRight} from "@react-icons/all-files/ai/AiOutlineArrowRight";
import {BiRightArrow} from "@react-icons/all-files/bi/BiRightArrow";
import {BiRightArrowAlt} from "@react-icons/all-files/bi/BiRightArrowAlt";
import PartnersWidget from "@/components/PartnersWidget/PartnersWidget";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar/>
            <HeroCarousel/>
            <AboutUsWidget/>
            <div className={`my-20 flex justify-center items-center flex-col`}>
                <h2 className={`font-bold text-primary text-2xl`}>Take A Look On Some Of Our Products</h2>
                <ColoredLine className={`w-1/4 bg-third`}/>
            </div>
            <div className={`grid grid-cols-4 gap-2 mx-20`}>
                <ProductCard image={`/images/product1.jpg`} name={`Product Name 1`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`}/>

                <ProductCard image={`/images/product2.jpg`} name={`Product Name 2`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`}/>

                <ProductCard image={`/images/product3.jpg`} name={`Product Name 3`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`}/>

                <ProductCard image={`/images/product4.jpg`} name={`Product Name 4`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`}/>
            </div>

            <div className="flex justify-end items-center my-5 mx-16">
                <Link href="#"
                      className="font-bold flex justify-between items-center transition-transform transform scale-100 hover:scale-105 hover:underline">
                    View all products
                    <BiRightArrowAlt
                        className="mx-3 text-2xl"/>
                </Link>
            </div>

            <div className={`h-full w-full`}>
                <ServicesWidget/>
            </div>

            <div className={`my-5`}>
                <PartnersWidget/>
            </div>

            <div className={`mt-10`}>
                <Footer/>
            </div>
        </>
    )
}
