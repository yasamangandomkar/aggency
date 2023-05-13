import About from '@/components/About'
import Banner from '@/components/Banner'
import Brands from '@/components/Brands'
import Title from '@/components/Title'
const Agency = () => {
    return (
        <div>
            <h3 className='text-center text-3xl mt-8'>ABOUT AGENCY</h3>
            <Title title='The last digital agency you will ever need!' />
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-items-center mt-8'>
                <div className='max-w-2xl'>
                    <div className='space-y-4' >
                        <h4 className='text-xl lg:text-3xl'>Turning your business ideas into smart digital products since 2001</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere? Maxime, sapiente consequatur voluptate veniam doloremque explicabo ipsa laboriosam a.</p>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 text-center'>
                            <div className='box'>
                                <h1 className='indigo'>10+</h1>
                                <h3>Years of experience</h3>
                            </div>
                            <div className='box'>
                                <h1 className='indigo'>50+</h1>
                                <h3>Successful cases</h3>
                            </div>
                            <div className='box'>
                                <h1 className='indigo'>12+</h1>
                                <h3>Industry awards</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 justify-center flex'>
                    <img className='w-2/4 h-full rounded-tl-3xl rounded-br-3xl' src="https://img.freepik.com/free-vector/hi-there-neon-sign-speech-bubble-with-text_1262-19559.jpg?t=st=1683639562~exp=1683640162~hmac=26b9447b4fe45757ac8b044a2c1c4e887cb064ce3ab6b540697561714fdaa1a0" alt="" />
                </div>

            </div>
            <Brands />
            <About />
            <Banner />
        </div >
    )
}

export default Agency