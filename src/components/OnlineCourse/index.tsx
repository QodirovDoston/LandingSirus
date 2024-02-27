import Text from "../reusable/Text"
import TextItem from "../reusable/TextItem"
import { Courses } from "../../utils/Constants"
import Card from "../Card"

const index = () => {
    return (
        <div id="courses" className="bg-[#ECF4FF] pb-[20px] mb-[20px] my-[30px]">
            <div className="xl:w-[85%] w-[95%] mx-auto pt-[20px] py-[10px] sm:px-[30px] px-[5px]">
                <span className="flex flex-col justify-center items-center">
                    <Text text="courses" />
                    <TextItem w="sm:w-[600px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </span>
                <ul className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[10px] items-center">
                    {Courses.map((value)=>{
                        return <Card value={value}  classAdd="mt-[20px] pb-[20px]" key={value.id}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default index