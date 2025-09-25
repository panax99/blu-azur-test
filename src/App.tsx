import './App.css'
import Footer from './components/layout/Footer/Footer'
import FifthSection from './features/home/sections/FifthSection/FifthSection'
import FirstSection from './features/home/sections/FirstSection/FirstSection'
import FourthSection from './features/home/sections/FourthSection/FourthSection'
import HeroSection from './features/home/sections/HeroSection/HeroSection'
import SecondSection from './features/home/sections/SecondSection/SecondSection'
import SixthSection from './features/home/sections/SixthSection/SixthSection'
import ThirdSection from './features/home/sections/ThirdSection/ThirdSection'


function App() {

  return (
    <div className='font-mulish overflow-x-hidden'>
      <HeroSection/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Footer/>
    </div>
  )
}

export default App
