import Hero from './Hero'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'
import Hobbies from './Hobbies'

export default function Content() {
  return (
    <div className="bg-zinc-950 text-white ">
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Hobbies />
    </div>
  )
}