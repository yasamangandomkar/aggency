import { home } from '../../assets/data'
const Agency = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="lg:w-2/3 text-white flex flex-col justify-center items-center text-center gap-5   ">
        <h1>The last digital agency you ll ever need</h1>
        <p className="max-w-xl leading-normal text-md font-light">Suspendisse ut magna porttitor, sollicitudin ligula at,
          molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla a
          c volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p>
      </div>
      <div className='flex justify-between w-full pt-8 md:flex-row flex-col columns-2 '>
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