import AboutBrand from "./components/AboutBrand/AboutBrand.jsx";
import Header from "./components/Header/Header.jsx";
import ProductsStore from "./components/ProductsStore/ProductsStore.jsx";
import { ProductContextProvider } from "./store/product-context.jsx";
import { CartContextProvider } from "./store/shopping-cart-context.jsx";

export default function App() {
  return (
    <>
      <Header />
      <ProductContextProvider>
        <CartContextProvider>
          <ProductsStore />
        </CartContextProvider>
      </ProductContextProvider>
      <AboutBrand />
    </>
  );
}
