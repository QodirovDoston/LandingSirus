import { NavsIcon } from "../../utils/Constants";
import logo from '../../../public/logss.png'

export const Footer = () => {
  return (
    <>
      <section className="bg-[#D3E5FE]">
        <footer className="w-[85%] mx-auto py-3">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="items-center gap-3">
              <h4 className="font-bold xl:text-[25px] text-[18px] text-gray-700 leading-[39px]">
                Education
              </h4>
              <a href="#" className="gap-1 flex items-center bg-light-200 px-4 xl:w-[200px] w-[110px] rounded-2xl shadow">
              <img src={logo} className="xl:w-[50px] w-[30px] object-contain" alt="Flowbite Logo" />
              <h1 className='text-gray-700 xl:text-3xl text-xl mt-1 font-extrabold'>iruis</h1>
            </a>
            </div>
            <div className="items-center gap-3">
              <h4 className="font-bold xl:text-[25px] text-[18px] leading-[39px] text-gray-700">
                Follow Us
              </h4>
              <div className="flex gap-2">
                {NavsIcon.map((item, index) => {
                  return (
                    <a
                      href={item.link}
                      key={index}
                      className="border-white rounded-2xl border-5 p-1 xl:w-12 w-8 bg-white hover:shadow-2xl duration-500"
                    >
                      <img src={item.img} alt="" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
