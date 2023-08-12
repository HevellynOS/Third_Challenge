

import classes from './firstsection.module.css'
import TextHome from '../TextHome/TextHome'
import SlideHomePage from '../SlideHomePage/SlideHomePage'

const FirstSection = () => {
  return (
    <section className={classes.section}>
        <div className={classes.design}></div>
        <TextHome/>
        <SlideHomePage/>
    </section>
  )
}

export default FirstSection