import FormSendEmail from "../FormSendEmail"
import contactus  from '../../assets/conatctUs.jpg'

const PreFooter = () => {
    return (
        <section id="contact" className='py-[40px] xl:w-[80%] w-[95%] mx-auto py-[10px]'>
                <div className="grid xl:grid-cols-2 grid-cols-1 items-center gap-5">
                <FormSendEmail />
                    <img src={contactus} alt="" />
               </div>
        </section>
    )
}

export default PreFooter