import { useState } from 'react';
import styles from './Header.module.css'
import CartButton from '../ui/CartButton/CartButton';

export default function Header() {

  const [isScrolling, setIsScrolling] = useState(false);

  function Scrolling() {
    if (window.scrollY >= 130) {
      setIsScrolling(true);
    } else setIsScrolling(false);
  }

  window.addEventListener("scroll", Scrolling)

    return (
      <div className={isScrolling ? styles.header_container_fixed : styles.header_container}>
        <section className={styles.header_section}>
        <div className={styles.logo}>
          <img src="/birkin-logo.png" />
          <h1>
            Parcure <span>Couture.</span>
          </h1>
        </div>
        <CartButton/>
      </section>
      </div>
    );
}