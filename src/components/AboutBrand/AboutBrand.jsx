import { useRef } from "react";
import { useInView, motion } from 'motion/react';
import styles from './AboutBrand.module.css';

export default function AboutBrand (){
    const ref = useRef();
    const isInView = useInView(ref, { amount: 0.5 })

    return (
        <section className={styles.about_section} ref={ref}>
            <motion.img src="/artur-photo.png" animate={isInView ? {scale: 1.5} : {scale: 1}}/>
            <div className={styles.description_container}>
                <h1>Founder Artur Nahornyi</h1>
                <p>The idea to make such bag came when I saw the similar one in USA.</p>
                <p className={styles.paragraph}>I found that we haven't such style in Ukraine, so I decided to make it.</p>
                <h2>.since 2025</h2>
            </div>
        </section>
    )
}