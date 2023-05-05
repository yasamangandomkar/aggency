import Title from "./Title"

const Hero = () => {
    return (
        <div className="bg-hero bg-no-repeat bg-cover w-full flex flex-col  items-center  bg-center text-white h-[90vh]">
            <div className=" gap-8 justify-center flex flex-col items-center absolute  lg:top-[20%]    lg:w-2/3 text-center mt-8">
                <div className="lg:text-5xl text-xl font-bold text-dark  text-stroke-3 ">
                    <Title title='creative' caption='7' />
                </div>
                <h2 className="lg:text-7xl text-4xl font-bold leading-normal ">WE BUILD DIGITAL EXPERIENCES</h2>
                <div className="flex items-center gap-3 flex-wrap justify-center lg:flex-nowrap">
                    <Title title='WEBSITES' /><span className="text-green text-3xl">.</span>
                    <Title title='BRANDING' /><span className="text-green text-3xl">.</span>
                    <Title title='DIGITAL MARKETING' />
                </div>
            </div>
        </div>
    )
}

export default Hero