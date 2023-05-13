import { expertise } from '../../public/assets/data'
import Card from './Card'
import Title from './Title'
const Expertise = () => {
    return (
        <div className="flex justify-center items-center flex-col space-y-3 py-6">
            <Title title='Our expertise' />
            <p className=" lg:max-w-3xl text-center ">Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor.</p>
            <div className=' gap-9 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
                {expertise.map((data) => (
                    <Card key={data.id} data={data} />
                ))}
            </div>


        </div>
    )
}

export default Expertise