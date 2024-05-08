import Link from "next/link";
import styles from "./categoryCard.module.css";
import Image from "next/image";

const CategoryCard = ({ title, imageUrl }) => {

    const getCategoryClassName = (title) => {
        switch (title.toLowerCase()) {
          case "style":
            return `${styles.category} ${styles.style}`;
          case "food":
            return `${styles.category} ${styles.food}`;
          case "fashion":
            return `${styles.category} ${styles.fashion}`;
          case "culture":
            return `${styles.category} ${styles.culture}`;
          case "travel":
            return `${styles.category} ${styles.travel}`;
          case "coding":
            return `${styles.category} ${styles.coding}`;
          
          default:
            return styles.category; 
        }
      };



  return (
    <div className={styles.category}>
      <Link
        href={`/blog?cat=${title}`}
        className={getCategoryClassName(title)}>
{      imageUrl && ( <Image
          src={`/${imageUrl}`}
          alt=""
          width={32}
          height={32}
          className={styles.image}
        /> )}
        {title}
      </Link>
    </div>
  );
};

export default CategoryCard;
