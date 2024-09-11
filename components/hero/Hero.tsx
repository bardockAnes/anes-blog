import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import styles from './styles.module.css'

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className={styles.hero}
    >
      <h2 className={styles.heroTitle}>مرحبًا بك في مدونتي</h2>
      <p className={styles.heroSubtitle}>مكان لمشاركة الأفكار المحلية و العالمية</p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className={styles.ctaButton}>
          ابدأ الأن
          <ArrowLeft className={styles.arrowIcon} />
        </button>
      </motion.div>
    </motion.section>
  )
}

export default Hero;
