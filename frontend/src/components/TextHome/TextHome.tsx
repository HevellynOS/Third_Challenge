

import bananaimg  from '../../assets/images/bananaimg.png';
import appleimg  from '../../assets/images/appleimg.png'
import classes from './texthome.module.css'
const TextHome = () => {
  return (
    
    <article className={classes.article}>
        <span className={classes.span}>Premium 
            <strong className={classes.strong}>quality
            </strong> <br/> Food for your 
                <img className={classes.img}  src={bananaimg} alt="banana-img"/> 
                    <strong className={classes.strong}> <br/>healthy 
                    </strong> 
                        <img className={classes.img} src={appleimg} alt="appleimg" /> 
            <strong className={classes.strong}>& Daily Life</strong>
        </span>
        <p className={classes.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br/> Error doloribus aut maiores
             voluptatum dignissimos sunt laboriosam ad qui
              quam itaque quidem molestias, perspiciatis quas praesentium se
              qui commodi? Quo, in maiores.
        </p>
    </article>
  )
}

export default TextHome