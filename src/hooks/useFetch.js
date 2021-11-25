import { useEffect, useState } from "react";

export default function useFetch(quantity) {
  // STATES
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const PRODUCTS_URL = `https://assignment.dwbt.tech/products`;
  const IMAGES_URL = `https://assignment.dwbt.tech/images`;

  async function combineData(quantity) {
    const allProducts = await fetchData(PRODUCTS_URL, "products");
    const allImages = await fetchData(IMAGES_URL, "images");
    const products = [...allProducts.slice(0, quantity)];

    const result = products.map((item, index) => {
      return { ...item, images: allImages[item.sku] };
    });
    setData(result);
  }

  // Methods
  async function fetchData(API_URL, key) {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(response.statusText);
      const body = await response.json();
      return body[key];
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  //hook
  useEffect(() => {
    combineData(quantity);
  }, [combineData /* quantity */]);

  return { data, error, loading };
}
