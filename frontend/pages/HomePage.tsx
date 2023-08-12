
import FirstSection from '../src/components/FirstSection/FirstSection'
import Footer from '../src/components/Footer/Footer'
import NavBar from '../src/components/NavBar/NavBar'

const HomePage = () => {
  return (
    <>
        <NavBar showInput={true} showBag={true} showButton={true}/>
        <FirstSection/>
        <Footer/>
    </>
  )
}

export default HomePage