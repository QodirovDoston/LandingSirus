import { headerpage } from "../../utils/Constants"
import { useTranslation } from "react-i18next"

const Header = () => {
  const {t} = useTranslation()
  return (
    <>
      <div className="max-w-screen grid xl:grid-cols-2 grid-cols-1  gap-20 sm:mt-[20px] mt-[30px] xl:w-[85%] w-[95%] mx-auto py-[10px] sm:px-[30px] xl:px-[10px] px-[10px]">
        <div className="">
          <h1 className="sm:text-[48px] text-[20px] font-semibold sm:pb-12 pb-6 sm:text-left text-center">{t("text.find")}</h1>
          <p className="md:text-[17px] text-[13px] leading-normal font-normal sm:text-left text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi, </p>
          <p className="md:text-[20px] text-[15px] leading-snug font-normal  sm:text-left text-center pt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. </p>
          <a href="#contact">
          <button className="px-6 py-4 bg-[#086CF9] text-white sm:block hidden rounded-sm mt-[30px] hover:bg-blue-800 hover:shadow-2xl"> {t("text.learn")}</button>
          </a>
        </div>
          <iframe className="h-[400px] w-full" src="https://www.youtube.com/embed/VlOTwD4Zy0E" title="Web Dasturchi kim va Web dasturlash necha turga bo&#39;linadi | | Muhammadaziz Esonboyev"></iframe>
        </div>

      <div id="howtoWork" className="w-[85%] mx-auto">
      <h1 className="text-5xl font-semibold text-center pt-20">{t("text.work")}</h1>
      <p className="text-center py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam et hendrerit euismod fusce sit. </p>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1">
        {headerpage.map((item, index) => {
          return (
            <div key={index} className={item.maindivstyle}>
              <img className="w-[100px] h-[90px] m-auto" src={item.img} alt="" />
              <h1 className={item.headingstyle}>{t(item.text)}</h1>
              <p className="text-center text-gray-600 py-6">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</p>
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}
export default Header