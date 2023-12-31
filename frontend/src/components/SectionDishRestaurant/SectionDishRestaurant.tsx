import img from '../../assets/images/fitMeRestaurant.png';
import FitMeDish from '../FitMeDish/FitMeDish';
import classes from './sectiondishrestaurant.module.css';
import InputSearch from '../InputSearch/InputSearch';
import offers from '../../assets/images/offers.png';
import { useParams } from 'react-router-dom';
import favourite from '../../assets/images/favourite.png'


const SectionDishRestaurant = () => {
  const { restaurantId } = useParams(); 

  if (!restaurantId) {
    return <p>Restaurant ID not found.</p>;
  }
  

  return (
    <section className={classes.section}>
      <img src={img} alt="" />
      <article className={classes.articleDish}>
        <FitMeDish selectedRestaurantId={restaurantId}/>
        <div className={classes.containerSearch}>
          <InputSearch
            type='text'
            placeholder='Search for dish'
          />
          <button>
            <img src={favourite} alt="" />
              Favourite
          </button>
        </div>
      </article>
      <div className={classes.offers}>
        <h2>Offers</h2>
        <picture>
          <img src={offers} alt="" />
          <caption>50% off up to ₹100 | Use code TRYNEW</caption>
        </picture>
        <picture>
          <img src={offers} alt="" />
          <caption>20% off | Use code PARTY</caption>
        </picture>
      </div>
    </section>
  );
};

export default SectionDishRestaurant;
