import { useState } from 'react'
import hero from "./assets/image-hero-desktop.png";
import hero2 from "./assets/image-hero-mobile.png";
import logo from "./assets/logo.svg";
import img1 from "./assets/client-databiz.svg"
import img2 from "./assets/client-audiophile.svg"
import img3 from "./assets/client-maker.svg"
import img4 from "./assets/client-meet.svg"
import {FaTimes, FaBars} from "react-icons/fa"


function App() {
  const [count, setCount] = useState(false)
  return (
    <div className="bg-[#FAFAFA] h-screen text-[18px]">
      <nav className='relative justify-between flex gap-8 items-center p-4 text-[#696969] font-semibold'>
        <img src={logo} alt='image' />
        <div className='hidden md:flex gap-6 w-full justify-between items-center'>
          <div className='flex gap-8'>
            <p>Features</p>
            <p>Company</p>
            <p>Careers</p>
            <p>About</p>
          </div>
        
          <div className='flex gap-5 items-center'>
          <span>Login</span>
          <span
          className='p-2 border border-[#696969] rounded-lg shadow-lg'>Register</span>
          </div>
        </div>
        {count && <div className='md:hidden py-12 px-12 flex flex-col absolute top-0 right-0 gap-6 h-screen bg-white items-center'>
            <span onClick={() => setCount(false)}><FaTimes /></span>
            <p>Features</p>
            <p>Company</p>
            <p>Careers</p>
            <p>About</p>
          
          <div className='flex flex-col gap-5 items-center'>
          <span>Login</span>
          <span
          className='p-2 border border-[#696969] rounded-lg shadow-lg'>Register</span>
          </div>
        </div>}
        <span onClick={() => setCount(true)} className='md:hidden float-right'><FaBars /></span>
      </nav>
      <section className='flex lg:gap-24 md:flex-row flex-col-reverse lg:px-28 md:px-8 mt-4'>
        <div className='lg:mt-24 md:mt-12 p-4'>
          <h2 className='flex md:flex-col justify-center gap-1 md:leading-tight text-[#141414] font-bold'>
            <span className='md:text-[80px] lg:text-[90px] text-4xl md:leading-[80px]'>Make</span>
            <span className='md:text-[60px] lg:text-[80px] text-4xl'>remote work</span>
          </h2>
          <div className='hidden md:block text-[#696969] font-medium md:mt-12'>
            <p>Get your team in sync no matter your location.</p>
            <p>Streamline your processes, create team rituals, and</p>
            <p>watch productiviy soar</p>
          </div>
          <div className='md:hidden block text-[#696969] text-[18px] font-medium mt-4 text-center'>
            <p>Get your team in sync no matter your location. Streamline your processes, create team rituals, and
            watch productiviy soar</p>
          </div>
          <div className='flex justify-center md:justify-start'>
            <button className='mt-8 text-white p-2 bg-black font-medium  rounded-lg'>
              Learn more
            </button>
          </div>
          <div className='flex items-center gap-5 mt-12'>
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
          </div>
        </div>
        <div className='hidden md:block w-2/5 p-4'>
          <img src={hero} alt='image' />
        </div>
        <div className='md:hidden block w-full p-4'>
          <img src={hero2} alt='image' />
        </div>
      </section>
    </div>
  )
}

export default App
