import  { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { slides } from '../../utils/Constants';
import UlList from '../UlList';


function Carusel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]); 


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
                className='sm:h-[500px] h-[300px] w-full h-full bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden  justify-center group-hover:block absolute sm:top-[35%] top-[35%]  -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
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