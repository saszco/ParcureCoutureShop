import styles from './CartButton.module.css'
import { CartContext } from '../../../store/shopping-cart-context'
import { useContext } from 'react'

export default function CartButton() {
    const { items } = useContext(CartContext)

    console.log(items)

    const itemsQuantity = items.length

    return (
        <p className={styles.button}>
            <i className="fa-solid fa-bag-shopping"></i>
            <button>Cart ({itemsQuantity})</button>
        </p>
    )
}