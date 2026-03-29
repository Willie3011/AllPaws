import { CiUser } from "react-icons/ci";
import { BsHeart, BsCart } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown, MdSearch } from "react-icons/md";
import { useState } from "react";



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-light flex flex-col text-primary'>
      <div className="container">
        <div className="h-16 md:h-20 flex items-center justify-between gap-2">
          <span className='font-bold font-baloo text-nowrap text-2xl md:text-3xl lg:text-4xl'>All <span className='text-accent'>Paws</span></span>
          <SearchBar />
          <div className="flex items-center gap-2 md:gap-4">
            <button className='text-sm md:text-base flex items-center gap-1'>Login / Sign Up <CiUser className="text-lg"/></button>
            <button className='text-sm md:text-base'><BsHeart className="text-lg"/></button>
            <button className='text-sm md:text-base'><BsCart className="text-lg" /></button>
            <button onClick={() => {setOpen(prev => !prev)}} className="w-10 flex flex-col items-center gap-1 md:hidden cursor-pointer outline-none p-2">
              <span className={`w-full h-0.5 rounded-2xl bg-primary transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : "translate-y-0"}`}></span>
              <span className={`w-full h-0.5 rounded-2xl bg-primary transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-0.5 rounded-2xl bg-primary transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : "translate-y-0"}`}></span>
            </button>
          </div>
        </div>
        {/* large device menu */}
        <div className="hidden md:flex items-center md:h-20 w-full">
          <ul className='h-full w-full flex items-center justify-between gap-2 md:gap-6 text-sm lg:text-base'>
            <li className='cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center'>Shop For Cats <MdOutlineKeyboardArrowDown className="inline-block text-lg" /></li>
            <li className='cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center'>Shop For Dogs <MdOutlineKeyboardArrowDown className="inline-block text-lg" /></li>
            <li className='cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center'>Shop by Brands <MdOutlineKeyboardArrowDown className="inline-block text-lg" /></li>
            <li className='cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center'>Accessories</li>
            <li className='cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center'>Sale</li>
            <li className='cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center'>Pharmacy</li>
            <li className='cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center'>Adopt</li>
            <li className='cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center'>Pet Parents</li>
            <li className='cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center'>Blog</li>
          </ul>
        </div>

        {/* s */}
        <div className={`${open ? "left-0": "left-250"} fixed top-16 right-0 bg-light/80 z-50 backdrop-blur-2xl pt-5 pb-7 px-6 shadow-md transition-all duration-300 ease-in-out md:hidden rounded-bl-4xl rounded-br-4xl`}>
          <ul className='h-full w-full flex flex-col items-center  gap-2'>
            <li className='text-base cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center py-3.5 px-0 w-full border-b border-primary'>Shop For Cats <MdOutlineKeyboardArrowDown className="inline-block text-lg" /></li>
            <li className='text-base cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center py-3.5 px-0 w-full border-b border-primary'>Shop For Dogs <MdOutlineKeyboardArrowDown className="inline-block text-lg" /></li>
            <li className='text-base cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center py-3.5 px-0 w-full border-b border-primary'>Shop by Brands <MdOutlineKeyboardArrowDown className="inline-block text-lg" /></li>
            <li className='text-base cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center py-3.5 px-0 w-full border-b border-primary'>Accessories</li>
            <li className='text-base cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center py-3.5 px-0 w-full border-b border-primary'>Sale</li>
            <li className='text-base cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center py-3.5 px-0 w-full border-b border-primary'>Pharmacy</li>
            <li className='text-base cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center py-3.5 px-0 w-full border-b border-primary'>Adopt</li>
            <li className='text-base cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center py-3.5 px-0 w-full border-b border-primary'>Pet Parents</li>
            <li className='text-base cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center py-3.5 px-0 w-full'>Blog</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center gap-2 border border-secondary rounded-full p-2 h-3/5 w-full sm:max-w-sm lg:max-w-md transition-all duration-300">
      <button className="flex items-center gap-1"><span className="text-nowrap text-sm font-semibold cursor-pointer">All Categories</span> <MdOutlineKeyboardArrowDown className="text-lg" /> </button>
      <div className="block h-3/4 w-0.5 bg-secondary"/>
      <input type="text" placeholder='Search for products, brands and more...' className='w-full px-4 py-2 focus:outline-none' />
      <button className='p-2 bg-primary text-white text-xl rounded-full cursor-pointer hover:opacity-95 duration-300'><MdSearch/></button>
    </div>
  )
}


export default Navbar