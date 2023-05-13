import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"

const Card = ({ data, className, caption, path }) => {
    return (
        <div className={`${"space-y-3 my-4"}` && className}>
            <img className="rounded-tl-3xl rounded-br-3xl" src={data.cover} alt="" />
            <div className="space-y-2 mt-2 items-start flex flex-col lg:w-2/4  w-full ">
                <Link href={`${path}/${data.id}`} className='title-link'>
                    <span className="hover:text-green">{data.title}</span>

                </Link>
                {/* <div className="text-indigo flex items-center gap-5 cursor-pointer">
                learn more <HiArrowRight />
            </div> */}
                <div className='flex'>
                    <span className="text-gray text-[12px]"> {data.catgeory} </span> {data.date && <span className="text-gray text-[12px]"> / {data.date}</span>}
                    {caption && <span className="text-indigo text-sm flex items-center gap-3">{caption}<HiArrowRight /></span>}
                </div>
            </div>
        </div >
    )
}

export default Card