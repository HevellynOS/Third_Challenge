
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import { SectionDishRestaurant } from '../src/components/SectionDishRestaurant/SectionDishRestaurant'


const RestaurantPage = () => {
  return (
    <>
         <Header showMenu={true} showNav={true}/>
          <SectionDishRestaurant/>
         <Footer/>
    </>
  )
}

export default RestaurantPage