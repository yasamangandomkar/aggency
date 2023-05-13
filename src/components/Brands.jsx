import { brand } from '../../public/assets/data'
import Title from './Title'

const Brands = () => {
    return (
        <div className='my-8'>
            <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
            <div className='flex lg:justify-between justify-center gap-5 my-9 xl:flex-nowrap flex-wrap'>
                {brand.map((item) => (
                    <img key={item.id} src={item.cover} alt="" className='w-64 h-32 opacity-20' />
                ))}
            </div>
        </div>
    )
}

export default Brands