import Layout from "@/components/Layout"
import Card from "@/components/Card"
import Title from "@/components/Title"
import { teamdata } from "../../public/assets/data"
const Team = () => {
    return (
        <Layout>
            <div>
                <h3 className="text-center my-8">MEET OUR TEAm</h3>
                <Title title='A team of smart & passionate creatives ' />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                {teamdata.map((item) => (
                    <Card data={item} key={item.id} caption={item.post} />
                ))}
            </div>
        </Layout>
    )
}

export default Team