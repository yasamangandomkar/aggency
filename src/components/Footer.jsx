import Link from "next/link"
import Logo from "./Logo"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer py-[80px] relative overflow-hidden bottom-0'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <div>
                            <Logo title='creative' caption='7' />
                            <br />
                            <span className="text-gray">
                                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
                            </span>
                            <br />
                            <br />
                            <h3>+1 001 234 5678</h3>
                            <br />
                            <button className='btn-primary'>Request for quote</button>
                        </div>
                        <ul className="space-y-3">
                            <h3>COMPANY</h3>
                            <li>
                                <Link href='/'>About agency</Link>
                            </li>
                            <li>
                                <Link href='/'>Our team</Link>
                            </li>
                            <li>
                                <Link href='/'>Showcase</Link>
                            </li>
                            <li>
                                <Link href='/'>Blog</Link>
                            </li>
                            <li>
                                <Link href='/'>Demo design system</Link>
                            </li>
                            <li>
                                <Link href='/'>Contact</Link>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <h3>SERVICES</h3>
                            <li>
                                <Link href='/'>Web Design & Development</Link>
                            </li>
                            <li>
                                <Link href='/'>Branding & Creative Services</Link>
                            </li>
                            <li>
                                <Link href='/'>Digital Marketing</Link>
                            </li>
                            <li>
                                <Link href='/'>E-Commerce</Link>
                            </li>
                        </ul>
                        <ul>
                            <h3>CONNECT</h3>
                            <div className='connect flex justify-between mt-5'>
                                <li>
                                    <Link href='/'>
                                        <BsFacebook size={25} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <AiFillBehanceCircle size={25} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <AiFillInstagram size={25} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <AiFillLinkedin size={25} />
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className=' py-5 flex flex-col lg:flex-row space-y-4 justify-between text-sm'>
                        <div className=''>
                            <span>© 2023 THE SEVEN. ALL RIGHTS RESERVED.</span>
                        </div>
                        <div>
                            <span>GORKCODER COMPANY</span>
                            <span> &nbsp; | &nbsp; </span>
                            <span>TERMS & CONDITIONS</span>
                        </div>
                    </div>
                    <div className="w-2/4 h-72 bg-blue absolute -bottom-2/4 rounded-full transform translate-x-1/2 blur-[80px] opacity-20"></div>
                </div>
            </footer>
        </>
    )
}

export default Footer