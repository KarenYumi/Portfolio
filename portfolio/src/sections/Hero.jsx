import bg from '../assets/images/bg.png'
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full min-h-screen flex items-end justify-end">
        <div className="max-w-md text-right">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-800 ">
            Portfolio
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-800 mt-4">
            Software Developer Full-Stack
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed">
            I love creating and experimenting.
            Somewhere between science and art, and I don’t believe in choosing just one. Why should we?
            And hey!! think of me as your friend. That’s how we roll.
          </p>
        </div>
      </div>

      <ArrowDown className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8" />
    </section>
  );
}