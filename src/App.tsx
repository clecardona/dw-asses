//@ts-nocheck
//NPM Packages
import { useState } from "react";

//Local Files
import "styles/base.sass";
import useFetch from "hooks/useFetch";

import { BoxError, Spinner } from "components/shared/FetchItems";
import Card from "components/Card";
import Header from "components/Header";
import Select from "components/Select";

export default function App() {
  //Local state
  const [quantity, setQuantity] = useState(5);
  const products = useFetch(quantity);

  //Constants
  const Cards = products.data.map((item) => (
    <Card key={item.sku} item={item} />
  ));

  console.log(products);
  return (
    <div className="App">
      {products.loading && <Spinner />}
      {products.error && <BoxError />}
      {!products.error && !products.loading && (
        <>
          <Header />
          <main>
            <Select setQuantity={setQuantity} />
            <div className="wrapper">
              <ul className="container">{Cards}</ul>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
