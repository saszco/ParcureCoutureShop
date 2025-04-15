import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({
  isLoading: true,
  products: null,
});

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "http://localhost:3000/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const ContextValue = {
    isLoading: isLoading,
    products: products,
  };

  return <ProductContext value={ContextValue}>{children}</ProductContext>;
}
