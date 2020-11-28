import ViewProducts from "./components/Catalogo";
import "./css/viewProducts.css";
import React, { useEffect, useState } from "react";
import getProducts from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  const [products, setProducts] = useState([]);
  const [buscado, setBuscado] = useState("Computadora");

  async function get1Products(title = buscado, filters = null) {
    console.log("llamando");
    let data = await getProducts(title, filters);
    setProducts(data);
    console.log(data);
  }
  useEffect(() => {
    get1Products();
  }, []);

  return (
    <div>
      <div className="App">
        <SearchBar
          get1Products={get1Products}
          setBuscado={setBuscado}
          placeholder="Ingrese lo que desea buscar"
          handleChange={(e) => console.log(e.target.value)}
        />
        <ViewProducts products={products} />
      </div>
    </div>
  );
}

export default App;
