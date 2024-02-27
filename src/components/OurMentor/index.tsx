
import Text from "../reusable/Text"
import TextItem from "../reusable/TextItem"
import {Mentors} from "../../utils/Constants"
import Card from "../Card";

import IMG1 from "../../assets/png/IMG1.png"
import IMG3 from "../../assets/png/IMG3.png"

 const index = () => {
  
  const val = [IMG3,IMG1,IMG3,IMG1,IMG3,IMG1]
  for(let i = 0; i <Mentors.length;i++){
    Mentors[i].img = val[i];
  }

  return (
    <div id="mentors" className="xl:w-[80%] w-[95%] mx-auto py-[10px] sm:px-[30px] px-[10px]">
        <span className="flex flex-col justify-center items-center">
            <Text text="mentors"/>
            <TextItem w="sm:w-[500px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum."/>
        </span>
        <ul className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-10 items-center mt-[10px]">
          {Mentors.map((value)=>{
            return <Card key={value.id} value={value} classAdd="mt-[20px] pb-[20px]"/>
          })}
        </ul>
    </div>
  )
}

export default index
