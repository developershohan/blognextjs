import Image from 'next/image'
import styles from'./featured.module.css'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Shohan here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}/>

        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, totam!
          </h2>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit officiis at ea repellat vel eaque itaque qui, tempora optio!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured