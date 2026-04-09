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
import disc1 from '../assets/images/disc_br.jpg'
import disc2 from '../assets/images/disc_fun.jpg'

export default function Hobbies() {
  return (
    <section className="bg-zinc-950 py-20 px-6">
      <h2 className="moirai-one text-7xl md:text-8xl text-white text-center mb-10 tracking-tight">
        HOBBIES
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
        <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden border border-amber-300/50 bg-zinc-900 group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 to-transparent" />
          <img src={wilson} className="absolute h-70 top-4 right-4 rotate-12 opacity-90" />
          <img src={mikasa} className="absolute h-30 bottom-25 left-1/6 drop-shadow-lg" />
          <img src={table} className="absolute h-45 top-7 left-0 scale-x-[-1] " />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-zinc-950">
            <span className="moirai-one text-amber-400 text-4xl">SPORT</span>
            <p className="text-zinc-500 text-md mt-1 uppercase tracking-widest">volleyball & table tennis</p>
          </div>
        </div>

        <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden border border-green-300/60 bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-br from-green-300/30 to-transparent" />
          <img src={flower} className="absolute h-full right-0 bottom-0 object-contain opacity-90" />
          <img src={potery} className="absolute top-0 left-20 -translate-x-1/2 h-45 object-contain opacity-90" />
          <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-zinc-950 w-full">
            <span className="moirai-one text-green-300 text-4xl">ART</span>
            <p className="text-zinc-500 text-md mt-1 uppercase tracking-widest">pottery & florals</p>
          </div>
        </div>

        <div className="relative col-span-2 row-span-1 rounded-2xl overflow-hidden border border-blue-300/50 bg-zinc-900 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent" />
          <div className="flex gap-2 absolute bottom-3 right-3 top-3 items-center">
            <img src={draw1} className="h-full object-cover rounded-lg flex-1" />
            <img src={draw2} className="h-full object-cover rounded-lg  flex-1" />
            <img src={draw3} className="h-full object-cover rounded-lg  flex-1" />
          </div>
          <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-zinc-950 w-full">
            <span className="moirai-one text-blue-300 text-4xl">DRAW</span>
            <p className="text-zinc-500 text-md mt-1 uppercase tracking-widest">illustration & sketching</p>
          </div>
        </div>

        <div className="relative col-span-2 row-span-1 rounded-2xl overflow-hidden border border-orange-400/50 bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-300/20 to-transparent" />
          <div className="flex gap-2 absolute bottom-3 right-3 top-3 items-center">
            <img src={inception} className="h-full object-cover rounded-lg flex-1" />
            <img src={ponyo} className="h-full object-cover rounded-lg flex-1" />
            <img src={princess} className="h-full object-cover rounded-lg flex-1" />
          </div>
          <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-zinc-950 w-full">
            <span className="moirai-one text-orange-300 text-4xl">FILM</span>
            <p className="text-zinc-500 text-md mt-1 uppercase tracking-widest">anime & cinema</p>
          </div>
        </div>

        <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden border border-pink-400/50 bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-l from-pink-400/30 to-transparent" />
          <img src={disc1} className="absolute h-28 top-4 left-1/2 rounded-full" style={{ animation: 'spin 9s linear infinite' }} />
          <img src={disc2} className="absolute h-24 top-6 left-1/3 rounded-full" style={{ animation: 'spin 7s linear infinite reverse' }} />
          <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-zinc-950 w-full">
            <span className="moirai-one text-pink-300 text-4xl">MUSIC</span>
            <p className="text-zinc-500 text-md mt-1 uppercase tracking-widest">Pop & MPB</p>
          </div>
        </div>

      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}