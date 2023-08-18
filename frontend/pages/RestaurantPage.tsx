

import { useParams } from 'react-router-dom'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import SectionDishRestaurant from '../src/components/SectionDishRestaurant/SectionDishRestaurant'
import SectionRestaurant from '../src/components/SectionRestaurant/SectionRestaurant'
const RestaurantPage = () => {


  const { restaurantId } = useParams();

  return (
    <>
         <div className='restaurant-page'>
           <Header showMenu={true} showNav={true}/>
              <SectionDishRestaurant/>
              <SectionRestaurant selectedRestaurantId={restaurantId}/>
           <Footer/>
         </div>
    </>
  )
}

export default RestaurantPage