import React, { useState } from "react";
import emailjs from "emailjs-com";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    product: "",
    quantity: 1,
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    emailjs
      .sendForm(
        "service_muh6t5k",
        "template_djpc2zo",
        e.target,
        "5Df-5T__8yp-FkhWQ"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        // Сброс формы после успешной отправки
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          product: "",
          quantity: 1,
          comments: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="order-form-page">
      <h2>Форма заказа</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Адрес:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Город:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">Область:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Почтовый индекс:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Товар:</label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Выберите товар</option>
            <option value="Футболка">Футболка</option>
            <option value="Джинсы">Джинсы</option>
            <option value="Платье">Платье</option>
            <option value="Кроссовки">Кроссовки</option>
            <option value="Рубашка">Рубашка</option>
            <option value="Шорты">Шорты</option>
            <option value="Свитер">Свитер</option>
            <option value="Куртка">Куртка</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Количество:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Комментарии:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Отправить заказ
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
