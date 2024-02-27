type Prop = {
    text:string,
    w:string
}

const TextItem = (props:Prop) => {
  return <p className={`sm:text-[16px] text-[14px] text-[#444444] my-[10px]  w-[80%] text-center ${props.w}`}>{props.text}</p>
}

export default TextItem