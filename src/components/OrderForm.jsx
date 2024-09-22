import React, { useState } from "react";
import emailjs from "emailjs-com";


const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    product: "",
    quantity: 1,
    totalPrice: 0,
    comments: "",
  });

  const [nameError, setNameError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setFormData({
      ...formData,
      product: selectedProduct,
      totalPrice: getProductPrice(selectedProduct) * formData.quantity,
    });
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    setFormData({
      ...formData,
      quantity,
      totalPrice: getProductPrice(formData.product) * quantity,
    });
  };

  const getProductPrice = (productName) => {
    // Здесь можно определить цены для каждого товара
    switch (productName) {
      case "Футболка":
        return 19.99;
      case "Джинсы":
        return 49.99;
      case "Платье":
        return 79.99;
      case "Кроссовки":
        return 89.99;
      case "Рубашка":
        return 34.99;
      case "Шорты":
        return 29.99;
      case "Свитер":
        return 59.99;
      case "Куртка":
        return 99.99;
      default:
        return 0;
    }
  };

  const validateName = () => {
    const { firstName, lastName } = formData;
    const isValidName = /^[а-яА-ЯёЁ]+$/.test(firstName) && /^[а-яА-ЯёЁ]+$/.test(lastName);
    setNameError(isValidName ? "" : "Пожалуйста, введите только русские буквы");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName();

    if (!nameError) {
      emailjs
        .sendForm("service_muh6t5k", "template_djpc2zo", e.target, "5Df-5T__8yp-FkhWQ")
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          // Сброс формы после успешной отправки
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            product: "",
            quantity: 1,
            totalPrice: 0,
            comments: "",
          });
          setNameError("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <div className="order-form-page">
      <h2>Форма заказа</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Имя:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={validateName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Фамилия:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={validateName}
            required
          />
        </div>
        {nameError && <div className="error">{nameError}</div>}
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
            onChange={handleProductChange}
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
            onChange={handleQuantityChange}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalPrice">Итоговая стоимость:</label>
          <input
            type="text"
            id="totalPrice"
            name="totalPrice"
            value={formData.totalPrice}
            readOnly
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