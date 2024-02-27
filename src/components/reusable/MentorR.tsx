type PropsType = {
    person:string,
    star:string
}

export const MentorR = (props:PropsType) => {
    return (
        <span className="flex mt-5 gap-5 items-center">
            <ul className="flex items-center justify-between w-[42%]" >
                <li className="flex items-center">
                    <img className="w-[16px] h-[16px]" src={props.person} alt="person" />
                    <p className="ml-1 text-[#555555] text-[14px]">8.2k</p>
                </li>
                <li className="flex items-center">
                    <img className="w-[16px] h-[16px]" src={props.star} alt="person" />
                    <p className="ml-1 text-[#555555] text-[14px]">4.5</p>
                </li>
            </ul>
            <p>25+ Courses</p>
        </span>
    )
}

