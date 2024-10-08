import React from "react";
import "../App.css";

const Delivery = () => {
  return (
    <section className="delivery">
      <h2>Доставка и способы оплаты</h2>
      <p>Мы предлагаем несколько удобных способов доставки:</p>
      <ul>
        <li>Курьерская доставка по городу - от $5</li>
        <li>Доставка почтой в другие регионы - от $10</li>
        <li>Самовывоз из нашего магазина - бесплатно</li>
      </ul>
      <p>Доступные способы оплаты:</p>
      <ul>
        <li>Наличными при получении</li>
        <li>Банковской картой на сайте</li>
        <li>Электронными платежными системами</li>
      </ul>
    </section>
  );
};

export default Delivery;
