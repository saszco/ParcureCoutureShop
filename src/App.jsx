import AboutBrand from './components/AboutBrand/AboutBrand.jsx';
import Header from './components/Header/Header.jsx'
import ProductsStore from './components/ProductsStore/ProductsStore.jsx';
import { ProductContextProvider } from './store/product-context.jsx';

export default function App() {
  return (
    <>
      <Header />
      <ProductContextProvider>
        <ProductsStore />
      </ProductContextProvider>
      <AboutBrand/>
    </>
  );
}
