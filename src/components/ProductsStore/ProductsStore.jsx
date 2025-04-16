import { use } from "react";
import { ProductContext } from "../../store/product-context";
import Product from "../Product/Product";
import styles from './ProductsStore.module.css';

export default function ProductsStore() {
  const { products, isLoading } = use(ProductContext);

  console.log(products)

  return (
    <section className={styles.productsStore}>
      <div className={styles.stock_p}>
        <h1>In stock now</h1>
        <p>The best collection by Arture <span>Parcure</span> Couture. <span>Inspired by Fusion</span></p>
      </div>
      <div>
        {isLoading && <p className={styles.loading_p}>Loading data..</p>}
        {products && (
          <ul className={styles.products}>
            {products.map((product) => (
              <li key={product._id}>
                <Product {...product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
