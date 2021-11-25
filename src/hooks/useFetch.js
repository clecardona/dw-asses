//NPM Packages
import { useEffect, useState } from "react";

export default function useFetch(quantity) {
  // States
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const PRODUCTS_URL = `https://assignment.dwbt.tech/products`;
  const IMAGES_URL = `https://assignment.dwbt.tech/images`;

  async function combineData(quantity) {
    const allProducts = await fetchData(PRODUCTS_URL, "products");
    const allImages = await fetchData(IMAGES_URL, "images");

    let itemToDisplay = quantity;
    if (quantity === "all") {
      itemToDisplay = allProducts.length;
    }
    const products = [...allProducts.slice(0, itemToDisplay)];
    const result = products.map((item) => {
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

  useEffect(() => {
    combineData(quantity);
  }, [quantity]);

  return { data, error, loading };
}
