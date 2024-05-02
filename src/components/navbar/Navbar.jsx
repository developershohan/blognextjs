import Link from "next/link";
import AuthLinks from "../AuthLinks/AuthLinks";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={"/facebook.png"} alt="facebook" width={24} height={24} />
        <Image src={"/instagram.png"} alt="instagram" width={24} height={24} />
        <Image src={"/tiktok.png"} alt="tiktok" width={24} height={24} />
        <Image src={"/youtube.png"} alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <h1>Virus's Blog</h1>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          HomePage
        </Link>
        <Link href="/" className={styles.link}>
          Content
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
