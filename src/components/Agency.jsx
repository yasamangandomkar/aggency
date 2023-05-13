import { home } from '../../public/assets/data'
import Title from './Title'
const Agency = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6">
      <div className="lg:w-2/3 text-white flex flex-col justify-center items-center text-center gap-5   ">
        <Title title='The last digital agency you ll ever need' />
        <p className="max-w-xl ">Suspendisse ut magna porttitor, sollicitudin ligula at,
          molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla a
          c volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  w-full'>
        {home.map((item) => (
          <div key={item.title} className='flex flex-col pt-9 lg:gap-5  space-y-2  items-center'>
            <i className='text-green'> {item.icon}</i>
            <span className='font-bold text-sm'>{item.title}</span>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Agency