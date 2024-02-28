import { CardTitle } from "../reusable/CardTitle"
import { MentorR } from "../reusable/MentorR"
import person from "../../assets/png/person.png"
import star from "../../assets/png/Star.png";
type PropType = {
    value: {
        img?: string,
        name: string,
        job?: string,
        id?: number,
        type?: string,
        text?:string,
        price?:string
    }
    classAdd: string
}
const index = (props: PropType) => {
    return (
        <div className={`bg-white mt-[10px] border border-gray-200 rounded-lg shadow hover:shadow-xl duration-700 ${props.classAdd}`}>
            <span className="flex justify-center items-center">
                <img 
                className={ props.value.type == "mentor" ? `rounded-t-lg  w-[100%] h-[250px]  object-contain mt-[5px] cursor-pointer` : `rounded-t-lg w-full h-[230px]  cursor-pointer` } src={props.value.img} alt="" />
            </span>
            <div className="p-5">
                {props.value.type == "course" ? <span className="flex justify-between items-center">
                <CardTitle title={props.value?.name} />
                <p className="text-[#086CF9] text-2xl">{props.value.price}</p>
                </span> : 
                <CardTitle title={props.value?.name} />}
                <p className="mb-3 mt-[10px] font-normal text-gray-700 dark:text-gray-400 sm:text-[16px] text-[14px] ">{props.value.job || props.value.text}</p>
                
                  <a href="#contact" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Ko'proq malumot
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a> 
                {props.value.type == "mentor" ? <MentorR star={star} person={person} /> : null}
            </div>
        </div>
    )
}

export default index