import CardList from "@/components/cardList/CardList"
import styles from "./blog.module.css"

import React from 'react'
import Menu from "@/components/menu/Menu"

const Blog = () => {
  return (
    <div className={styles.container} >
        <div className={styles.titleContainer}>

        <h1 className="title" >Blogs</h1>
        </div>
        <div className={styles.blog_area}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default Blog