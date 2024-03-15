import './App.css';
import './index.css'
import { MdOutlineAccountCircle, MdOutlineSearch } from "react-icons/md";
import { HiBars3CenterLeft } from "react-icons/hi2";
import bannerImg from './assets/banner_img.jpg'
import { useEffect, useState } from 'react';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {


  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [want, setWant] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('fakeJson.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  const handleCooking = (time, calories) => {
    setTotalCalories(totalCalories + calories);
    setTotalTime(totalTime + time)

    console.log(time, calories);

  }


  const handlePreparing = (recipe) => {
    setPreparing([...preparing, recipe])
    handleDeleteWantToCook(recipe);
  }
  const handleDeleteWantToCook = (recipe) => {
    const newWant = want.filter((item) => item != recipe);
    setWant(newWant);
  }

  const handleWantToCook = (recipe) => {

    const isExist = want.find((item) => item === recipe)

    if (isExist) {
      toast.warn("Already exits");
      return
    }
    setWant([...want, recipe]);
  }

  return (
    <div>

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
        <div className='text-white text-center space-y-6 lg:px-[210px] p-4 lg:py-[120px]'>
          <h1 className='max-w-[840px] mx-auto text-[24px] md:text-[52px] font-bold'>
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className='max-w-[850px] mx-auto font-size[18px] text-gray-300'>
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
          </p>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6 pt-4'>
            <button className='hover:bg-cyan-700 hover:text-white duration-300 px-7 py-5 text-[20px] rounded-full bg-[#0BE58A] font-semibold border-none'>Explore Now</button>
            <button className='hover:bg-cyan-700 duration-300 hover:border-cyan-700 px-7 py-5 text-[20px] rounded-full text-white font-semibold border border-white bg-transparent'>Our Feedback</button>
          </div>
        </div>
      </div>


      {/* main section */}
      <main className='my-[50px] md:my-[100px]'>
        <h1 className='text-[#150B2B] font-semibold text-[40px] text-center'>
          Our Recipes
        </h1>
        <p className='text-[#150B2B99] max-w-[800px] mx-auto text-center'>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.
        </p>


        <div className='flex flex-col lg:flex-row gap-6 w-11/12 md:w-4/5 mx-auto'>
          <div className='lg:w-[60%] w-full grid grid-cols-1 lg:grid-cols-2 gap-6 border border-black'>
            {
              recipes.map((recipe, idx) => <div style={{ border: '1px solid gray' }} className='space-y-4 rounded-xl shadow-lg p-6 overflow-hidden' key={idx}>
                <div style={{ backgroundImage: `url(${recipe.recipe_image})` }} className='w-[100%] rounded-xl h-[220px] bg-cover bg-center'>
                </div>
                <h1 className='text-[20px] text-[#282828] font-semibold'>{recipe.recipe_name}</h1>
                <p className='h-[40px] text-[#878787]'>{recipe.short_description}</p>
                <hr />
                <h3 className='mt-2 text-[#282828] text-[18px] font-medium'>Ingredients: {recipe.ingredients.length}</h3>
                <ul className='space-y-1'>
                  {
                    recipe.ingredients.map((ingredient, idx) => <li className='text-[#878787] text[18px]' key={idx}>
                      {ingredient}
                    </li>)
                  }
                </ul>
                <hr />
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 items-center text-[16px] text-[#282828CC]'>
                    <CiClock2 />
                    {recipe.preparing_time}
                    <span>minutes</span>
                  </div>
                  <div className='flex gap-2 items-center text-[16px] text-[#282828CC]'>
                    <AiOutlineFire />
                    {recipe.calories}
                    <span>calories</span>
                  </div>

                </div>
                <button onClick={() => handleWantToCook(recipe)} className='px-6 text-[#150B2B] border-none hover:cursor-pointer font-semibold text-[18px] py-3 rounded-full bg-[#0BE58A]'>Want to Cook</button>
              </div>)
            }

          </div>
          <div className='w-full lg:w-[40%]'>

            <div>
              <h1 className='text-[24px] font-semibold text-[#282828] text-center'>Want to Cook : {want.length}</h1>
              <hr className='w-[60%] mx-auto' />
              <div className='overflow-x-auto'>
                <table className='w-[100%] border-collapse text-[#282828B2] font-medium'>
                  <thead>
                    <tr className='text-start p-4'>
                      <th className='text-start p-4'></th>
                      <th className='text-start p-4'>Name</th>
                      <th className='text-start p-4'>Time</th>
                      <th className='text-start p-4'>Calories</th>
                    </tr>
                  </thead>


                  <tbody>
                    {
                      want.map((recipe, idx) => <tr className='bg-[#f2f2f2]' key={idx}>
                        <td className='p-4'>{idx + 1}</td>
                        <td className='p-4'>{recipe.recipe_name}</td>
                        <td className='p-4'>{recipe.preparing_time} <span>minutes</span></td>
                        <td className='p-4'>{recipe.calories} <span>calories</span></td>
                        <td className='p-4'><button onClick={() => { handlePreparing(recipe); handleCooking(recipe.preparing_time, recipe.calories); }} className='bg-[#0BE58A] font-semibold px-4 py-2 rounded-full hover:cursor-pointer border-none'>Preparing</button></td>
                      </tr>)
                    }
                  </tbody>

                </table>
              </div>


            </div>

            <div>
              <h1 className='text-[24px] font-semibold text-[#282828] text-center'>Currently cooking : {preparing.length}</h1>
              <hr className='w-[60%] mx-auto' />
              <div className='overflow-x-auto'>
                <table className='w-[100%] border-collapse text-[#282828B2] font-medium'>
                  <thead>
                    <tr className='text-start p-4'>
                      <th className='text-start p-4'></th>
                      <th className='text-start p-4'>Name</th>
                      <th className='text-start p-4'>Time</th>
                      <th className='text-start p-4'>Calories</th>
                    </tr>
                  </thead>


                  <tbody>
                    {
                      preparing.map((recipe, idx) => <tr className='' key={idx}>
                        <td className='p-4'>{idx + 1}</td>
                        <td className='p-4'>{recipe.recipe_name}</td>
                        <td className='p-4'>{recipe.preparing_time} <span>minutes</span></td>
                        <td className='p-4'>{recipe.calories} <span>calories</span></td>
                      </tr>)
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className='p-4'></td>
                      <td className='p-4'></td>
                      <td className='p-4'>Total Time = <br /> {totalTime} <span> minutes</span></td>
                      <td className='p-4'>Total Calories = <br /> {totalCalories} <span> calories</span></td>
                    </tr>
                  </tfoot>

                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
