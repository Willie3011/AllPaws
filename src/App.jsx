import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Categories from './sections/Categories';
import Trending from './sections/Trending';
import Popular from './sections/Popular';
import LowPrices from './sections/LowPrices';
import Brands from './sections/Brands';
import Contact from './sections/Contact';
import Blog from './sections/Blog';
import Newsletter from './sections/Newsletter';


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Trending/>
        <Popular/>
        <LowPrices/>
        <Brands/>
        <Contact/>
        <Blog/>
        <Newsletter/>
      </main>
      <Footer/>
    </>
  )
}

export default App