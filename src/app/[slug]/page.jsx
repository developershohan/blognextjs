import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
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
      <div className={styles.bodywrapper}>
        <div className={styles.contentWrapper}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            magni cumque laborum assumenda dolorem rerum aliquid numquam
            aliquam, consequatur, explicabo recusandae deserunt fugiat dolorum
            incidunt? Sed rerum modi, harum esse nisi eos quam debitis accusamus
            sit expedita, atque laudantium quisquam quia reprehenderit illo.
            Odio a placeat repudiandae modi perspiciatis quos! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Maiores harum rem,
            dolor porro, fuga, cumque repellat ipsa eum quaerat dicta ut! Ex
            delectus inventore quam nostrum debitis possimus sint odit, quidem
            vitae ullam quae? Omnis quisquam temporibus deserunt, neque magnam,
            blanditiis nulla laboriosam possimus voluptate soluta, praesentium
            unde nihil illum.
          </p>
        </div>
        <div className={styles.muenuWrapper}>
            <Menu/>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
