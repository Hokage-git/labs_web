import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const [products, setProducts] = useState([]);
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProductChange = (e) => {
    const selectedProduct = products.find(
      (product) => product.id === parseInt(e.target.value)
    );
    if (selectedProduct) {
      setFormData({
        ...formData,
        product: selectedProduct.id,
        totalPrice: selectedProduct.price * formData.quantity,
      });
    }
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    const selectedProduct = products.find(
      (product) => product.id === formData.product
    );
    if (selectedProduct) {
      setFormData({
        ...formData,
        quantity,
        totalPrice: selectedProduct.price * quantity,
      });
    }
  };

  const validateName = () => {
    const { firstName, lastName } = formData;
    const isValidName =
      /^[а-яА-ЯёЁ]+$/.test(firstName) && /^[а-яА-ЯёЁ]+$/.test(lastName);
    setNameError(isValidName ? "" : "Пожалуйста, введите только русские буквы");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateName();

    if (!nameError) {
      try {
        // Преобразуем данные формы в формат, ожидаемый сервером
        const orderData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          product: formData.product, // Убедитесь, что это ID продукта
          quantity: formData.quantity,
          totalPrice: formData.totalPrice,
          comments: formData.comments,
        };

        // Отправка заказа на сервер
        const response = await axios.post(
          "http://localhost:3001/api/orders",
          orderData
        );
        console.log("Order created:", response.data);

        // Отправка email через emailjs
        await emailjs.sendForm(
          "service_muh6t5k",
          "template_djpc2zo",
          e.target,
          "5Df-5T__8yp-FkhWQ"
        );

        console.log("Order placed and email sent successfully");

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
      } catch (error) {
        console.error("Error placing order:", error);
      }
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
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
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
            value={formData.totalPrice.toFixed(2)}
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
