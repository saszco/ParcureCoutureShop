import styles from './CartButton.module.css'
import { CartContext } from '../../store/shopping-cart-context'
import { useContext, useRef } from 'react'
import CartModal from '../CartModal/CartModal';

export default function CartButton() {
    const modal = useRef();
    const { items } = useContext(CartContext)

    const itemsQuantity = items.length

    function handleOpenCart() {
        modal.current.open()
    }

    return (
      <>
        <CartModal ref={modal} title="Your cart"/>
        <p className={styles.button}>
          <i className="fa-solid fa-bag-shopping"></i>
          <button onClick={handleOpenCart}>Cart ({itemsQuantity})</button>
        </p>
      </>
    );
}