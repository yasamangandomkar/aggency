import Link from "next/link"
import { useState } from "react"
import { HiMenuAlt3 } from 'react-icons/hi'
import Title from "./Title"
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const nav = [
        { title: "Home", path: "/" },
        { title: "Agency", path: "/" },
        { title: "Team", path: "/" },
        { title: "Services", path: "/" },
        { title: "Blog", path: "/" },
        { title: "Contact", path: "/" },

    ]
    return (
        <nav className="flex justify-between lg:h-16  w-full items-center shadow-md ">
            <Link href='/' className="lg:text-3xl text-xl items-center h-full  text-stroke-3 text-center mt-5 font-bold "><Title title="Creative" caption={7} /></Link>
            <div>
                <div className="lg:flex gap-5 hidden">
                    <ul className="flex justify-center items-center space-x-5">
                        {nav.map((item) => (
                            <li className="text-white text-md  flex  hover:text-green hover:border-b-2 border-b-2 border-dark hover:border-green transition-all duration-200 ease-in" key={item.title}><Link href={item.path}>{item.title}</Link></li>
                        ))}
                    </ul>
                    <button className="px-6 py-2 rounded-full bg-green text-dark">Book A Consultation </button>
                </div>
                {toggle && <div className="lg:hidden absolute top-0 left-0 bg-dark  space-y-4  p-3 mt-6 shadow-md w-screen">
                    <ul className="flex flex-col space-y-4  ">
                        {nav.map((item) => (
                            <li className="text-white text-md  flex  hover:text-green hover:border-b-2 border-b-2 border-dark hover:border-green transition-all duration-200 ease-in" key={item.title}><Link href={item.path}>{item.title}</Link></li>
                        ))}
                    </ul>
                    <button className="px-6 py-2 rounded-full bg-green text-dark">Book A Consultation </button>

                </div>}
                <div className="pt-3 lg:hidden" onClick={() => setToggle(!toggle)}><HiMenuAlt3 color="white" /></div>
            </div>
        </nav>
    )
}

export default Navbar