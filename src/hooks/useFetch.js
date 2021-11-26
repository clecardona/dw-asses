//NPM Packages
import { useEffect, useState } from "react";

export default function useFetch() {
  // States
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const PRODUCTS_URL = `https://assignment.dwbt.tech/products`;
  const IMAGES_URL = `https://assignment.dwbt.tech/images`;

  async function appendImages() {
    const allProducts = await fetchData(PRODUCTS_URL, "products");
    const allImages = await fetchData(IMAGES_URL, "images");
    const productsWithImages = allProducts.map((item) => {
      return { ...item, images: allImages[item.sku] };
    });
    setData(productsWithImages);
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

  useEffect(() => {
    appendImages();
  }, []);

  return { data, error, loading };
}
