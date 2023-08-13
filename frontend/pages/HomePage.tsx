
import FirstSection from '../src/components/FirstSection/FirstSection'
import SecondSection from '../src/components/SecondSection/SecondSection'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'


const HomePage = () => {
  return (
    <>
        <Header showMenu={true} showNav={true}/>
        <FirstSection/>
        <SecondSection/>
        <Footer/>
    </>
  )
}

export default HomePage