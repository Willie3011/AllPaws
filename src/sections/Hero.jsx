import hero_1_1 from '../assets/hero-1-1.png';
import hero_2 from '../assets/hero-2.png';
import hero_3 from '../assets/hero-3.png';
import { IoIosArrowForward } from "react-icons/io";


const Hero = () => {
  return (
    <section className="h-auto lg:h-dvh">
      <div className="container py-32 h-full w-full">
        <div className="h-full w-full flex flex-col md:flex-row gap-2">
          {/* main col */}
          <div className="w-full md:w-[50%] h-full grid grid-cols-1 lg:grid-cols-2 col-span-2 md:row-span-2 space-y-6 lg:space-y-0 items-center p-6 rounded-4xl bg-background">
            <div className="text-primary space-y-3 flex flex-col items-center lg:items-start">
              <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl'>Up to</h2>
              <h1 className="font-bold text-nowrap text-4xl md:text-5xl lg:text-7xl relative before:content[''] before:absolute before:w-full before:h-1 before:bg-accent before:-bottom-1">45% OFF</h1>
              <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl'>Thousands of pet favorites</h2>
              <button className='primary-button'>Shop Now <IoIosArrowForward /></button>
            </div>
            <div className="image-container">
              <img src={hero_1_1} alt="" className='image-contain' />
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col gap-4">

            <div className="w-full md:h-1/2 grid grid-cols-2 items-center p-4 max-md:py-12 text-white rounded-4xl bg-secondary">
              <div className="space-y-4">
                <h2 className='font-semibold text-2xl'>Looking for Kitty stuff???</h2>
                <button className='ghost-button'>Show Now <IoIosArrowForward /></button>
              </div>
              <div className="image-container">
                <img src={hero_2} alt="" className='image-contain' />
              </div>
            </div>
            <div className="w-full md:h-1/2 grid grid-cols-2 items-center p-4 text-white rounded-4xl bg-accent">
              <div className="image-container">
                <img src={hero_3} alt="" className='image-contain' />
              </div>
              <div className="space-y-4">
                <h2 className='font-semibold text-2xl'>Looking for Doggy stuff???</h2>
                <button className='ghost-button'>Show Now <IoIosArrowForward /></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero