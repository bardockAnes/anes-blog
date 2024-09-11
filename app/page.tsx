'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import styles from '@/styles/page.module.css'
import NavBar from "@/components/nav-bar/NavBar"
import Hero from "@/components/hero/Hero"
import Post from "@/components/posts/Post"


export default function Home() {

  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <Post/>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={styles.newsletter}
        >
          <h2 className={styles.newsletterTitle}>ابق على اطلاع</h2>
          <p className={styles.newsletterSubtitle}>اشترك في نشرتنا الإخبارية للحصول على آخر المشاركات والرؤى التقنية</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="أدخل بريدك الإلكتروني" className={styles.emailInput} />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button type="submit" className={styles.subscribeFormButton}>
                اشترك
              </button>
            </motion.div>
          </form>
        </motion.section>
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className={styles.footer}
      >
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <h2 className={styles.footerTitle}>مدونة أنس</h2>
            <p className={styles.footerSubtitle}>استكشاف الحدود الرقمية</p>
          </div>
          <div className={styles.socialLinks}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button className={styles.socialButton}>تويتر</button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button className={styles.socialButton}>جيثب</button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button className={styles.socialButton}>لينكد إن</button>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}