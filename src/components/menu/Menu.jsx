import CategoryCard from "../categoryCard/categoryCard";
import MenuCard from "../menuCard/menuCard";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>What's hot</h3>
        <h2 className={styles.secondTitle}>Most Popular</h2>
        <div className={styles.listing}>
          <MenuCard image={false} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Discover by topic</h3>
        <h2 className={styles.secondTitle}>Category</h2>
        <div className={styles.categories}>
        <CategoryCard title="coding"/>
        <CategoryCard title="food"/>
        <CategoryCard title="style" />
        <CategoryCard title="travel" />
        <CategoryCard title="fashion"/>
        <CategoryCard title="culture"/>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Chosen by topic</h3>
        <h2 className={styles.secondTitle}>Editors Pick</h2>
        <div className={styles.listing}>
          <MenuCard image={true} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
