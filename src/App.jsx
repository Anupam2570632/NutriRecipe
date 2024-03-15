import './App.css';
import { MdOutlineAccountCircle, MdOutlineSearch } from "react-icons/md";
import { HiBars3CenterLeft } from "react-icons/hi2";



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
      <div>
        
      </div>


      {/* main section */}
      <main>
        main
      </main>

    </>
  )
}

export default App
