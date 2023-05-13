const Logo = ({ caption, title }) => {
    return (
        <div>
            <span className="text-green lg:text-3xl text-xl ">{caption}</span>
            <span className="transparent lg:text-3xl text-xl items-center h-full  text-stroke-3 text-center mt-5 font-bold">  {title}</span>
        </div>
    )
}

export default Logo