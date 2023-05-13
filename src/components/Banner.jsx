import Title from "./Title"

const Banner = () => {
    return (
        <div className="gradient rounded-tl-3xl my-5 rounded-br-3xl px-3 h-44 items-center flex flex-col justify-center text-center">
            <Title className="" title='we are looking forward to start a new project' />
            <p className="text-stroke-3 lg:text-3xl text-lg mt-5 font-bold transparent">Lets take your business to the next level!</p>
        </div>
    )
}

export default Banner