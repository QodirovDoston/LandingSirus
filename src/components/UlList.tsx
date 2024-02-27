
import { Sele } from '../utils/Constants'
import CounUPCom from "./CounUpCom"

const UlList = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-[-100px]'>
            <div className='py-[4px] bg-white shadow mt-10'>
                <div className="flex gap-1 sm:ml-0 ml-[10px] flex-wrap justify-around py-5">
                    {Sele.map((value, index) => {
                        return (
                            <div key={index} className='flex gap-4 sm:mt-0 mt-5'>
                                <div className='flex sm:gap-3 gap-1' >
                                    <img className='' src={value.img} alt="" />
                                    <div className="">
                                        <h1 className='font-bold xl:text-3xl md:text-xl text-md'><CounUPCom duration={7} end={value.pricee}/>+</h1>
                                        <p className='mt-2 text-blue-500'>{value.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UlList
