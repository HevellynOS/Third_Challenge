
import FitMeInfo from '../FitMeInfo/FitMeInfo'
import classes from './secondsection.module.css'

const SecondSection = () => {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Restaurants</h1>
        <FitMeInfo/>
    </section>
  )
}

export default SecondSection