import Navbar from "@/components/Navbar/Navbar";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import AboutUsWidget from "@/components/AboutUsWidget/AboutUsWidget";
import ProductCard from "@/components/ProductCard/ProductCard";
import ColoredLine from "@/components/Utilities/ColoredLine";
import ServicesWidget from "@/components/ServicesWidget/ServicesWidget";

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

            <ServicesWidget/>
        </>
    )
}
