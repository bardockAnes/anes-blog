import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './styles.module.css';
import { Cairo, Tajawal } from 'next/font/google'

const cairo = Cairo({ subsets: ['arabic'] })



const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
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
                        className={styles.logo}>
                        مدونة أنس
                    </motion.h1>
                    <nav className={styles.desktopNav}>
                        <button className={styles.navButton}>من نحن</button>
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
                        <button className={styles.mobileNavButton}>من نحن</button>
                        <button className={styles.mobileSubscribeButton}>اشترك</button>
                    </nav>
                </motion.div>
            )}
        </>
    )
}

export default NavBar;