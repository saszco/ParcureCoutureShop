import { useContext } from "react";
import { ProductContext } from "../../store/product-context";
import styles from "./Product.module.css";
import { Button } from "antd";

export default function Product({ id, name, price, description, image_url }) {
  return (
    <div className={styles.product}>
      <img src={image_url} alt="This is an image of Arture Couture bag" />
      <div className={styles.info}>
        <div>
          <h2>{name}</h2>
          <p className={styles.price}>${price}</p>
        </div>
        <p>{description}</p>
        <Button variant="outlined" size="large">Add to cart</Button>
      </div>
    </div>
  );
}
