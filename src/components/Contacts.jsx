import React from "react";

const Contacts = () => {
  return (
    <section className="contacts">
      <h2>Контакты</h2>
      <p>Наш адрес: г. Москва, ул. Примерная, д. 123</p>
      <p>Телефон: +7 (123) 456-78-90</p>
      <p>Email: info@example.com</p>
      <p>Часы работы:</p>
      <ul>
        <li>Понедельник - Пятница: с 10:00 до 20:00</li>
        <li>Суббота: с 10:00 до 18:00</li>
        <li>Воскресенье: выходной</li>
      </ul>
    </section>
  );
};

export default Contacts;
