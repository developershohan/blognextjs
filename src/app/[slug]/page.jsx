import Image from "next/image";
import styles from "./singlePage.module.css";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
            illo?
          </h2>
          <div className={styles.author_info}>
            <div className={styles.author_img_wrapper}>
              <Image src="/moon.png" fill alt="" />
            </div>
            <div className={styles.author_details}>
              <h3>shohan</h3>
              <p className={styles.date}>25 April 2023</p>
            </div>
          </div>
        </div>
        <div className={styles.post_img_wrapper}>
          <Image src="/p1.jpeg" fill alt="" />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
