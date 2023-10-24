import { Cocktails } from "../../type";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Shared.module.css";


interface CocktailsFunProps {
  cocktail: Cocktails[];
}

function Cocktail(props: CocktailsFunProps) {
  
  return (
      <div className={styles.container}>
      <Sidebar cocktail={props.cocktail} />
      <h1 className={`${styles.h1Text} ${styles.cocktailspageH1}`}>Alle Cocktails</h1>
        <div className={`${styles.littleContainer} ${styles.cocktailspageLittleContainer}`}>
          {props.cocktail.map((item) => {
            return (
              <Link to={`/cocktail/${item.strDrink.replace(/[ ,-,%,/,.,&]/g, '')}`}>
                <div className={styles.miniContainer} >
                  <div className={styles.effectContainer}>
                  <div className={styles.imgDiv}>
                  <img className={styles.img} src={item.strDrinkThumb}  alt=""/>
                  <div className={`${styles.text} ${styles.middle}`}>{item.strDrink}</div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
  )}

export default Cocktail;