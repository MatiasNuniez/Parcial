import React, { useEffect, useState } from "react";
import "../css/viewProducts.css";

const SearchBar = (props) => {
  const [bus, setBus] = useState("Computadora");
  const [New, setNew] = useState(true);
  const [Max, setMax] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    setBus(e.target.value);
    // if (bus.length > 0) {
    //   props.setBus(bus);
    //   // props.get1Products(bus, {
    //   //   sort: Max,
    //   //   itemNew: New
    //   // });
    //   // props.setBus(bus, {
    //   //   sort: Max,
    //   //   itemNew: New
    //   // });
    // }
  };

  const ChangeNew = (e) => {
    setNew(!New);
  };

  const ChangeMax = (e) => {
    setMax(!Max);
  };

  useEffect(() => {
    props.get1Products(bus, {
      Max,
      New
    });
  }, [Max, New, bus]);

  return (
    <div>
      <input
        type="search"
        className="search form-control"
        placeholder={props.placeholder}
        onChange={handleChange}
      />
      <span>Nuevo : </span>
      <input
        className="form-check-label"
        name="nuevo"
        type="checkbox"
        checked={New}
        onChange={ChangeNew}
      />
      <span> MaxPrice : </span>
      <input
        className="form-check-label"
        name="nuevo"
        type="checkbox"
        checked={Max}
        onChange={ChangeMax}
      />
    </div>
  );
};
export default SearchBar;
