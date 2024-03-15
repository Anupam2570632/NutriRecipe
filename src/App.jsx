import './App.css';
import { MdOutlineAccountCircle, MdOutlineSearch } from "react-icons/md";
import { HiBars3CenterLeft } from "react-icons/hi2";
import bannerImg from './assets/banner_img.jpg'


function App() {

  return (
    <>

      {/* header section */}
      <header className='w-11/12 md:w-4/5 mx-auto flex items-center justify-between md:mt-[50px] mt-[20px]'>

        <HiBars3CenterLeft className='text-[30px] hover:cursor-pointer md:hidden block' />

        <h1 className='text-3xl hover:cursor-pointer font-bold text-[#150B2B]'>
          Recipe Calories
        </h1>

        <ul className='hidden md:flex list-none gap-8 text-[#150B2BB2]'>
          <li className='hover:cursor-pointer'>Home</li>
          <li className='hover:cursor-pointer'>Recipes</li>
          <li className='hover:cursor-pointer'>About</li>
          <li className='hover:cursor-pointer'>Search</li>
        </ul>

        <div className='md:flex items-center gap-4 hidden'>
          <div className='flex items-center gap-2 py-3 px-6 bg-[#0f0b2b0d] rounded-3xl'>
            <MdOutlineSearch className='text-[24px] text-[#150B2BB2]' />
            <input className='bg-transparent text-[#150B2BB2] text-[16px] outline-none border-none' placeholder='Search' type="text" />
          </div>
          <MdOutlineAccountCircle className='text-[32px] hover:cursor-pointer p-2 text-[#150B2B] rounded-full bg-[#0BE58A]' />

        </div>
      </header>


      {/* banner section */}
      <div style={{
        borderRadius: '24px',
        background: `linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url(${bannerImg}) lightgray 0px -18.896px / 100% 123.31% no-repeat`
      }} className='bg-banner mt-[20px] md:mt-[50px] w-11/12 md:w-4/5 mx-auto bg-cover'>
        <div className='text-white text-center space-y-6 px-[210px] py-[120px]'>
          <h1 className='max-w-[840px] text-[52px] font-bold'>
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className='max-w-[850px] font-size[18px] text-gray-300'>
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
          </p>
          <div className='flex items-center justify-center gap-6 pt-4'>
            <button className='hover:bg-cyan-700 hover:text-white duration-300 px-7 py-5 text-[20px] rounded-full bg-[#0BE58A] font-semibold border-none'>Explore Now</button>
            <button className='hover:bg-cyan-700 duration-300 hover:border-cyan-700 px-7 py-5 text-[20px] rounded-full text-white font-semibold border border-white bg-transparent'>Our Feedback</button>
          </div>
        </div>
      </div>


      {/* main section */}
      <main className='mt-[50px] md:mt-[100px]'>
        <h1 className='text-[#150B2B] font-semibold text-[40px] text-center'>
          Our Recipes
        </h1>
        <p className='text-[#150B2B99] max-w-[800px] mx-auto text-center'>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.
        </p>


        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </main>

    </>
  )
}

export default App
