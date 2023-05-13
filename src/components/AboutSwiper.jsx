import { HiArrowRight } from "react-icons/hi"

const AboutSwiper = ({ data }) => {
    return (
        <div className="flex flex-col bg-dark lg:px-6">
            <div className="flex pl-5 items-center">
                <div className="w-16 h-16">
                    <img src={data.cover} alt="" className="rounded-full w-full h-full  bg-cover" />
                </div>
                <div className=" text-sm font-bold flex flex-col px-5 gap-2 text-start">
                    <h2 className="text-white">{data.name}</h2>
                    <span className="text-gray uppercase">{data.post}</span>
                </div>
            </div>
            <p className="text-left text-base py-5 leading-normal  text-white">{data.desc}</p>
            {/* <span className="text-start text-indigo flex items-center gap-3 text-sm">VIEO CASE <HiArrowRight /></span> */}
        </div>
    )
}

export default AboutSwiper