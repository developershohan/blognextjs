import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>Style</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit, amet consectetur 
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum nihil eaque adipisci eius similique laudantium iste, culpa quia enim autem delectus incidunt obcaecati, magnam qui omnis ullam modi eum voluptas veritatis possimus, cumque perferendis consectetur natus. Itaque dolor eos quo consectetur deleniti, molestias commodi aut officia consequatur, enim magnam.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
