
import FirstSection from '../src/components/FirstSection/FirstSection'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'

const HomePage = () => {
  return (
    <>
        <Header showMenu={true} showNav={true}/>
        <FirstSection/>
        <Footer/>
    </>
  )
}

export default HomePage