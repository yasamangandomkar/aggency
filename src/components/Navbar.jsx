import Link from "next/link"
import { useState } from "react"
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from "react-icons/io"
import Logo from "./Logo"
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const nav = [
        { title: "Home", path: "/" },
        { title: "Agency", path: "/agency" },
        { title: "Team", path: "/team" },
        { title: "Blogs", path: "/blogs" },
    ]
    return (
        <nav className="flex justify-between h-16  w-full  items-center shadow-md sticky top-0 bg-dark z-50">
            <Link href='/'><Logo title="Creative" caption={7} /></Link>
            <div>
                <div className="lg:flex  gap-5 hidden">
                    <ul className="flex justify-center  items-center space-x-5">
                        {nav.map((item) => (
                            <li className="text-white text-md  flex  hover:text-green hover:border-b-2 border-b-2 border-dark hover:border-green transition-all duration-200 ease-in" key={item.title}><Link href={item.path}>{item.title}</Link></li>
                        ))}
                    </ul>
                    <button className="px-6 py-2 rounded-full bg-green text-dark">Book A Consultation </button>
                </div>
                {toggle && <div className="lg:hidden absolute top-6 left-0 bg-dark z-50  space-y-4  p-3 mt-6 shadow-md w-screen">
                    <ul className="flex flex-col space-y-4  ">
                        {nav.map((item) => (
                            <li className="text-white text-md  flex  hover:text-green hover:border-b-2 border-b-2 border-dark hover:border-green transition-all duration-200 ease-in" key={item.title}><Link href={item.path}>{item.title}</Link></li>
                        ))}
                    </ul>
                    <button className="btn-primary">Book A Consultation </button>
                </div>}
                <div className="pt-3 lg:hidden text-lg text-white" onClick={() => setToggle(!toggle)}>
                    {toggle ? <IoMdClose /> : <HiMenuAlt3 />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar