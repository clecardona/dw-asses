//NPM Packages
import { useState, FC } from "react";

//Local Files
import "styles/base.sass";
import useFetch from "hooks/useFetch";
import { displayNElements } from "scripts/methods";
import { BoxError, Spinner } from "components/shared/FetchItems";
import Card from "components/Card";
import Header from "components/Header";
import Select from "components/Select";

const App: FC = () => {
  //Local state
  const [quantity, setQuantity] = useState(10);
  const products = useFetch();
  const productsToDisplay = displayNElements(products.data, quantity);

  //Constants
  const Cards = productsToDisplay.map((item) => (
    <Card key={item.sku} item={item} />
  ));

  return (
    <div className="App">
      <Header />
      {products.loading && <Spinner />}
      {products.error && <BoxError />}
      {!products.error && !products.loading && (
        <main>
          <Select hook={{ quantity, setQuantity }} />
          <div className="wrapper">
            <ul className="container">{Cards}</ul>
          </div>
        </main>
      )}
    </div>
  );
};
export default App;
