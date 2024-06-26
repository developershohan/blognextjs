import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";
import CategoryCard from "../categoryCard/categoryCard";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Post Categories </div>
      <div className={styles.categories}>
        <CategoryCard title="coding" imageUrl="coding.png" />
        <CategoryCard title="food" imageUrl="food.png" />
        <CategoryCard title="style" imageUrl="style.png" />
        <CategoryCard title="travel" imageUrl="travel.png" />
        <CategoryCard title="fashion" imageUrl="fashion.png" />
        <CategoryCard title="culture" imageUrl="culture.png" />
        {/* <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}>
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          culture
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          travel
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}>
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link> */}
      </div>
    </div>
  );
};

export default CategoryList;
