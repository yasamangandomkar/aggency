import Logo from "./Logo"

const Hero = () => {
    return (
        <div className="bg-hero bg-no-repeat bg-cover w-screen  flex flex-col  items-center   text-white h-screen">
            <div className=" gap-8 justify-center flex flex-col items-center absolute  lg:top-[20%] lg:w-2/3 text-center mt-8">
                <div className="lg:text-5xl text-xl font-bold text-dark  text-stroke-3 ">
                    <Logo title='creative' caption='7' />
                </div>
                <h2 className="lg:text-7xl text-4xl font-bold leading-normal ">WE BUILD DIGITAL EXPERIENCES</h2>
                <div className="flex items-center gap-3 flex-wrap justify-center lg:flex-nowrap">
                    <span />WEBSITES<span className="text-green text-3xl">.</span>
                    <span />BRANDING<span className="text-green text-3xl">.</span>
                    <span>DIGITAL MARKETING</span>
                </div>
            </div>
        </div>
    )
}

export default Hero