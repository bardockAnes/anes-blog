import { motion } from 'framer-motion'
import React from 'react'
import styles from './styles.module.css';
import Image from "next/image"

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


const Post = () => {
  return (
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
    </motion.section>)
}

export default Post