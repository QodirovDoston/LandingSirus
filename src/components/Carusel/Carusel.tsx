import  { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { CaruselWorld1, slides } from '../../utils/Constants';
import UlList from '../UlList';
import { useTranslation } from 'react-i18next';



function Carusel() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideInde: any) => {
        setCurrentIndex(slideInde);
    };

    return (
        <div id='home' className=' w-full relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='sm:h-[600px] h-[600px] w-full h-full bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden  justify-center group-hover:block absolute sm:top-[35%] top-[35%]  -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden md:h-[200px] h-[90px] justify-center group-hover:block absolute sm:top-[47%] top-[48%]  -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <div className='grid text-center mx-auto mt-[1%]'>
                    {CaruselWorld1.map((value,index)=>{
                        return(
                        <div className=" flex items-center justify-center flex-col" key={index}>
                            <h1  className={value.para1Style}>{t(value.para1)}</h1>
                            <p className={value.para2Style}>{t(value.para2)}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute sm:top-[35%] top-[35%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 sm:justify-center items-center py-2'>
                {slides.map((_slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer' >
                    </div>
                ))}
            </div>
            <UlList />
        </div>
    );
}
export default Carusel;