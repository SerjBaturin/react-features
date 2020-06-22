import React from "react";
import "./style.scss";

const data = [
  { name: "Астра", product: "astor", stocklevel: "10", price: 2.99 },
  { name: "Нарцисс", product: "daffodil", stocklevel: "12", price: 1.99 },
  { name: "Роза", product: "rose", stocklevel: "2", price: 4.99 },
  { name: "Пион", product: "peony", stocklevel: "0", price: 1.5 },
  { name: "Примула", product: "primula", stocklevel: "1", price: 3.12 },
  { name: "Подснежник", product: "snowdrop", stocklevel: "15", price: 0.99 },
];

const Filters = () => {
  return (
    <div className="filters">
      <h1>Filters</h1>
      <table border="1" frame="" cellSpacing="0" cellPadding="5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Latin</td>
            <td>Level</td>
            <td>Price</td>
          </tr>
        </thead>
        {data.map((item, i) => (
          <tr>
            <td key={i}>{item.name}</td>
            <td key={i}>{item.product}</td>
            <td key={i}>{item.stocklevel}</td>
            <td key={i}>{item.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Filters;
