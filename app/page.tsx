'use client'

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import styles from './page.module.css'
const posts = [
  {
    title: "مستقبل الذكاء الاصطناعي في تطوير الويب",
    excerpt: "استكشف كيف يعيد الذكاء الاصطناعي تشكيل مشهد تطوير الويب...",
    image: "https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "إتقان React Hooks",
    excerpt: "تعمق في React Hooks وتعلم كيفية كتابة مكونات React أكثر كفاءة...",
    image: "https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "فن التصميم المتجاوب",
    excerpt: "اكتشف المبادئ والتقنيات وراء إنشاء تصميمات ويب متجاوبة...",
    image: "https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "التطورات الحديثة في الأمن السيبراني",
    excerpt: "تعرف على أحدث الأساليب لحماية مواقع الويب والتطبيقات من الهجمات...",
    image: "https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "كيفية بناء تطبيقات ويب قابلة للتوسع",
    excerpt: "اكتشف المبادئ الأساسية لبناء تطبيقات ويب متطورة وقابلة للتوسع...",
    image: "https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "تصميم تجربة مستخدم استثنائية",
    excerpt: "تعلم كيفية تحسين تجربة المستخدم على مواقعك وتطبيقاتك...",
    image: "https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={styles.container}>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={styles.header}
      >
        <div className={styles.headerContent}>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={styles.logo}
          >
            مدونة أنس
          </motion.h1>
          <nav className={styles.desktopNav}>
            <button className={styles.navButton}>الرئيسية</button>
            <button className={styles.navButton}>من نحن</button>
            <button className={styles.navButton}>اتصل بنا</button>
            <button className={styles.subscribeButton}>اشترك</button>
          </nav>
          <button className={styles.mobileMenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className={styles.menuIcon} />
            <span className={styles.srOnly}>القائمة</span>
          </button>
        </div>
      </motion.header>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className={styles.mobileMenu}
        >
          <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)}>
            <X className={styles.closeIcon} />
          </button>
          <nav className={styles.mobileNav}>
            <button className={styles.mobileNavButton}>الرئيسية</button>
            <button className={styles.mobileNavButton}>من نحن</button>
            <button className={styles.mobileNavButton}>اتصل بنا</button>
            <button className={styles.mobileSubscribeButton}>اشترك</button>
          </nav>
        </motion.div>
      )}
      <main className={styles.main}>
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={styles.hero}
        >
          <h2 className={styles.heroTitle}>مرحبًا بك في حديقتي الرقمية</h2>
          <p className={styles.heroSubtitle}>استكشف الأفكار والرؤى حول التكنولوجيا والحياة</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className={styles.ctaButton}>
              ابدأ القراءة
              <ArrowRight className={styles.arrowIcon} />
            </button>
          </motion.div>
        </motion.section>
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={styles.posts}
        >
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (i + 1), duration: 0.8 }}
              className={styles.post}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={styles.imageWrapper}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className={styles.postImage}
                />
              </motion.div>
              <div className={styles.postContent}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className={styles.readMoreButton}>اقرأ المزيد</button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.section>
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