import styles from './Header.module.css'

export default function Header() {
    return (
      <header>
        <div className={styles.logo}>
          <img src="/birkin-logo.png" />
          <h1>
            Parcure <span>Couture.</span>
          </h1>
        </div>
        <p>
          <i className="fa-solid fa-bag-shopping"></i>
          <button>Cart ()</button>
        </p>
      </header>
    );
}