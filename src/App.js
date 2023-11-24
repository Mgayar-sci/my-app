/* eslint-disable no-unreachable */
import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Search from "./components/Search";
import { useState } from "react";
import Hi from "./components/Hi";

function App() {
  const [cs309, setCs309] = useState("");
  const [productsFilter, setProductsFilter] = useState("");
  const products = [
    { name: "laptop1", id: "15" },
    { name: "laptop2" },
    { name: "laptop3" },
  ];
  return (
    <>
      <Search onChange={(e) => setProductsFilter(e.target.value)} />
      {products
        .filter((p) => p.name.includes(productsFilter))
        .map((p) => (
          <Product name={p.name} id={p.id} />
        ))}
    </>
  );
  return <Search Islam={(e) => setCs309(e.target.value)} />;
  return products
    .filter((p) => p.name.endsWith("1"))
    .map((p) => <Product key={p.name} name={p.name} />);
  return products.map((p) => <Product name={p.name} id={p.id} />);
  return (
    <>
      <Product name="cs309" id="1" />
      <Product name="cs300" />
      <Product name="cs301" />
      <Product name="cs302" />
      <Product name="cs303" />
      <Product name="cs304" />
      <Product name="cs305" />
      <Product name="cs306" />
      <Product name="cs307" />
    </>
  );
  return <Product />;
  return <Hi />;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
