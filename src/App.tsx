//@ts-nocheck
//NPM Packages
import { useState } from "react";

//Local Files
import "styles/base.sass";
import useFetch from "hooks/useFetch";

import { BoxError, Spinner } from "components/shared/FetchItems";
import Card from "components/Card";

export default function App() {
  //Local state
  const [quantity, setQuantity] = useState(5);
  const products = useFetch(quantity);
  //console.log(products.data);

  //Constants
  const Cards = products.data.map((item) => (
    <Card key={item.sku} item={item} />
  ));

  return (
    <div className="App">
      {products.loading && <Spinner />}
      {products.error && <BoxError />}
      {!products.error && !products.loading && (
        <>
          <header>DW</header>
          <main>
            <label>
              Items to display : {quantity}
              <select
                name="qty"
                defaultValue={5}
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={100}>show all</option>
              </select>
            </label>

            <ul className="container">{Cards}</ul>
          </main>
        </>
      )}
    </div>
  );
}
