import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import styles from "./Product.module.css";
import { Button } from "antd";

export default function Product({ _id, name, price, description, image_url }) {
  const { addItemToCart } = useContext(CartContext)

  return (
    <div className={styles.product}>
      <img src={`http://localhost:3000${image_url}`} alt="This is an image of Arture Couture bag" />
      <div className={styles.info}>
        <div>
          <h2>{name}</h2>
          <p className={styles.price}>${price}</p>
        </div>
        <p>{description}</p>
        <Button variant="outlined" size="large" onClick={() => addItemToCart(_id)}>Add to cart</Button>
      </div>
    </div>
  );
}
