import wilson from '../assets/images/wilson.png'
import mikasa from '../assets/images/mikasa.png'
import table from '../assets/images/tableTenis.png'
import draw1 from '../assets/images/draw1.jpg'
import draw2 from '../assets/images/draw2.jpg'
import draw3 from '../assets/images/draw3.jpg'
import princess from '../assets/images/princess.jpg'
import ponyo from '../assets/images/ponyo.jpg'
import inception from '../assets/images/Inception.jpg'
import music from '../assets/images/music.png'
import flower from '../assets/images/flower.png'
import potery from '../assets/images/potery.png'

export default function Hobbies() {
  return (
    <>
      <section id='hobbies' className="min-h-screen py-20">
        <h1 className='moirai-one flex justify-center text-5xl md:text-8xl pb-5'>HOBBIES</h1>
        <div className='flex items-center'>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto w-full">
            <div className='grid md:grid-cols-5 gap-8 items-center'>
              <div className='relative bg-amber-200 w-full h-100'>
                <span className='absolute bottom-2 w-full flex justify-center text-5xl'>SPORT</span>
                <img src={table} className='absolute h-50 bottom-40 right-10 scale-x-[-1]' />
                <img src={wilson} className='absolute rotate-25 h-80 left-10 bottom-30' />
                <img src={mikasa} className='absolute h-35 bottom-20 right-0 drop-shadow-2xl' />
              </div>
              <div className='relative bg-blue-300 w-full h-100'>
                <span className='absolute bottom-2 w-full flex justify-center text-5xl'>DRAW</span>
                <img src={draw1} className='absolute rotate-x-50 rotate-z-45 top-45 h-40 left-6 drop-shadow-2xl' />
                <img src={draw3} className='absolute rotate-x-50 rotate-z-45 top-25 h-42 left-8 drop-shadow-2xl' />
                <img src={draw2} className='absolute rotate-x-50 rotate-z-45 top-0 h-43 left-8 drop-shadow-2xl' />
              </div>
              <div className='relative bg-orange-200 w-full h-100'>
                <span className='absolute bottom-2 w-full flex justify-center text-5xl'>FILM</span>
                <img src={inception} className='absolute bottom-60 h-45 left-1 drop-shadow-2xl' />
                <img src={princess} className='absolute top-20 h-45 right-2 drop-shadow-2xl' />
                <img src={ponyo} className='absolute top-42 h-42 left-2 drop-shadow-2xl' />
              </div>
              <div className='relative bg-pink-300 w-full h-100'>
                <span className='absolute bottom-2 w-full flex justify-center text-5xl'>MUSIC</span>
                <img src={music} className='absolute top-42 h-42 left-2 ' />
              </div>
              <div className='relative bg-green-100 w-full h-100'>
                <span className='absolute bottom-2 w-full flex justify-center text-5xl'>ART</span>
                <img src={flower} className='absolute top-15 h-70 right-0' />
                <img src={potery} className='absolute top-0 right-15' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}