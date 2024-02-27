import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { NavsIcon, ulli } from "../../utils/Constants"
import logo from '../../../public/sirius.png'



const NavbarPage = () => {
  const [nav, setNav] = useState<boolean>(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <nav className='sticky top-0 z-10 bg-white px-3 shadow-xl' 
    data-aos-anchor-placement="top-bottom">
      <div className='xl:w-[85%] w-[98%] mx-auto xl:py-[10px] py-[2px] sm:px-[30px] px-[1px]'>
        <nav className="bg-[#ffffff] border-gray-200  dark:bg-gray-900 dark:border-gray-700 ">
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto pt-4">
            <a href="#home" className="gap-1 flex items-center mx-2 mb-3">
              <img src={logo} className="xl:w-[165px] lg:w-[100px] w-[75px]" alt="Flowbite Logo" />
            </a>
            <button onClick={handleNav} data-collapse-toggle="navbar-multi-level" type="button" className=" inline-flex items-center p-2 mx-3 mb-3 text-sm text-black rounded-lg lg:hidden flex  mt-2" aria-controls="navbar-multi-level" aria-expanded="false">
              <AiOutlineMenu className=" w-[50px] h-[35px] cursor-pointer" />
            </button>
            {nav && <div className='w-full bg-[#ffffff]' id="navbar-multi-level">
              <ul className="pr-1 lg:flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <div className='text-center grid text-[#000000] text-[19px] font-light bg-[#ffffff] border-none' id="1">
                {ulli.map((val, ind) => {
                  return <a className='text-xl hover:text-white rounded-3xl hover:shadow-2xl hover:bg-blue-400 px-5 py-2 shadow-3xl duration-700 cursor-pointer underline-dotted' href={val.link} key={ind} >{val.name}</a>
                })}
              </div>
                <div className="flex  gap-2 ">
                  <div className="flex gap-2 ">
                  </div>
                </div>
                <div className="flex justify-between gap-3 mt-[24px]">
                  {NavsIcon.map((value, index) => {
                    return <a href={value.link} key={index} className='rounded-3xl border-5 py-2 px-2 bg-gray-200'><img src={value.img} alt="" /></a>
                
                  })}
                </div>
              </ul>
            </div>}
            {/* leptop  */}
            <ul className='lg:flex hidden md:gap-1 gap-0 items-center justify-between mr-[-6]   '>
                {ulli.map((val, ind) => {
                  return <a href={val.link} key={ind} className='text-xl hover:text-white rounded-3xl hover:shadow-3xl hover:bg-blue-400 px-5 py-2 shadow-3xl duration-700 cursor-pointer hover:shadow-2xl' >{val.name}</a>
                })}
              {/* <SelectTransla /> */}
              <a className='' href="tel:+99895-007-70-50">
                <p className='p-1 text-white bg-[#086CF9] hover:bg-blue-800 hover:shadow-2xl px-6 py-3 rounded-3xl text-[19px] font-light'>+99895-007-70-50</p>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </nav>

  )
}
export default NavbarPage;