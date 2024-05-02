"use client"

import Link from "next/link";
import styles from "./AuthLinks.module.css";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const status = "unauthenticated";

  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>Login</Link>
      )}

      <div className={styles.burger} onClick={()=>setOpen(!open)} >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">Content</Link>
          <Link href="/">About</Link>
          {status === "authenticated" ? (
        <>
          <Link href="/write" >Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
