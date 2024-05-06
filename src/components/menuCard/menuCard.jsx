import Image from "next/image";
import styles from "./menuCard.module.css";

const MenuCard = ({ image }) => {
  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.imageContainer}>
          <Image src="/moon.png" alt="" fill />
        </div>
      )}

      <div className={styles.textContainer}>
        <div className={styles.category}>Coding</div>
        <h2 className={styles.title}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h2>
        <div className={styles.details}>
          <span className={styles.author}>shohan -</span>
          <span className={styles.date}> 01.09.2014</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
