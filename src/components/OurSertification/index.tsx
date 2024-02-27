import sertificat from "../../assets/png/Coursera.png"


const arr =[sertificat,sertificat,sertificat,sertificat,sertificat,sertificat]
const index = () => {
  return (
    <div className="bg-[#ECF4FF] py-9">
    <div className="w-[85%] mx-auto ">
      <h2 className="text-5xl font-semibold text-center sm:text-[38px] text-[25px] text-center pb-9">Our Certificate</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          {arr.map((elem , index)=>{
          return(
            <img className="object-cover " key={index} src={elem} alt="" />
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default index