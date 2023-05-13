import { showcase } from "../../public/assets/data"
import Card from "./Card"
import Title from "./Title"

const ShowCase = () => {
    return (
        <div className="flex flex-col justify-center w-full  items-center">
            <Title title='selected cases' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full showCase ">
                {showcase.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default ShowCase