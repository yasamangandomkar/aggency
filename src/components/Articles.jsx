import Link from "next/link"
import { blogdata } from "../../public/assets/data"
import Card from "./Card"
import Title from "./Title"

const Articles = () => {
    return (
        <div>
            <Title title='Latest News & articles' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 articles lg:space-y-4">
                {blogdata.map(article => (

                    <Card key={article.id} path='blogs' data={article} className='flex lg:flex-row flex-col items-center' />


                ))}
            </div>
        </div >
    )
}

export default Articles