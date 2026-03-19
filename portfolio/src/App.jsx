import Header from './components/Header'
import Content from './sections/Content'
import Footer from './components/Footer'
import HangingCharm from './components/HangingCharm'

export default function App() {
  return (
    <div className="bg-zinc-950 text-white">
      <Header />
      <HangingCharm />
      <Content />
      <Footer />
    </div>
  )
}