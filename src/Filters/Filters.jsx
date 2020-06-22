import React, { useState } from "react";
import "./style.scss";

const flowers = [
  { name: "Астра", product: "astor", stocklevel: "10", price: 2.99 },
  { name: "Нарцисс", product: "daffodil", stocklevel: "12", price: 1.99 },
  { name: "Роза", product: "rose", stocklevel: "2", price: 4.99 },
  { name: "Пион", product: "peony", stocklevel: "0", price: 1.5 },
  { name: "Примула", product: "primula", stocklevel: "1", price: 3.12 },
  { name: "Подснежник", product: "snowdrop", stocklevel: "15", price: 0.99 },
];
const some = [
  { name: "asdasd", product: "65543524213", stocklevel: "113", price: 10 },
  { name: "zxczxc", product: "34534534", stocklevel: "234", price: 150 },
  { name: "cacasc", product: "234234234", stocklevel: "34234", price: 30 },
  { name: "ascasc", product: "123123123", stocklevel: "1", price: 20 },
];

const Filters = () => {
  const [data, setData] = useState(flowers);
  const [sortedData, setSortedData] = useState(null);


  return (
    <div className="filters">
      <h1>Filters</h1>
      <table border="1" frame="" cellSpacing="0" cellPadding="5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Latin</td>
            <td>Level</td>
            <td onClick={() => setSortedData(data.sort((a, b) => b.price - a.price))}>
              Price
            </td>
          </tr>
        </thead>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.product}</td>
            <td>{item.stocklevel}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Filters;
