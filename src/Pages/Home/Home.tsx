import { Cocktails } from "../../type";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Home.module.css";

interface HomeProps {
  cocktail: Cocktails[];
}

const Home = (props: HomeProps) => {
  return (
    <>
      <Sidebar cocktail={props.cocktail} />

    <div className={styles.container}>

      <div className={styles.sectionOnecontentContainer}>
        <h1 className={`${styles.h1Title} ${styles.popularTitile}`}>Popular Cocktails</h1>
        <div className={styles.littleContainer} >
          {props.cocktail
            .filter((item, index) => index < 10)
            .map(item =>
              <Link to={`/cocktail/${item.strDrink}`} key={item.strDrink}>
                <div className={styles.miniContainer} >
                  <div className={styles.effectContainer}>
                    <div className={styles.imgDiv}>
                      <img alt={item.strDrink} className={styles.homeImg} src={item.strDrinkThumb} />
                      <div className={`${styles.text} ${styles.middle}`}> {item.strDrink}</div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
        </div>
      </div>

      <div className={styles.sectionTwocontentContainer}>
        <h1 className={` ${styles.newestTitile}`}>Newest Cocktails</h1>
        <div className={styles.littleContainer}>
          {props.cocktail
            .filter((item, index) => index >= 10 && index < 20)
            .map(item =>
              <Link to={`./cocktail/${item.strDrink}`} key={item.strDrink}>
                <div className={styles.miniContainer} >
                  <div className={styles.effectContainer}>
                    <div className={styles.imgDiv}>
                      <img alt={item.strDrink} className={styles.homeImg} src={item.strDrinkThumb} />
                      <div className={`${styles.text} ${styles.middle}`}> {item.strDrink}</div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
        </div>
      </div>

    </div>
    </>
  )
}

export default Home;