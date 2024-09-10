import React from "react";
import ProductCard from "./ProductCard";
import "../App.css";

const Catalog = () => {
  const products = [
    {
      id: 1,
      name: "Футболка",
      price: 19.99,
      image:
        "https://pplx-res.cloudinary.com/image/upload/v1725816477/ai_generated_images/dy7pmdegte6w1rxylkrk.png",
      currency: "$",
    },
    {
      id: 2,
      name: "Джинсы",
      price: 49.99,
      image:
        "https://pplx-res.cloudinary.com/image/upload/v1725816560/ai_generated_images/v8nxny4d4rtqprdsajyr.png",
      currency: "$",
    },
    {
      id: 3,
      name: "Платье",
      price: 79.99,
      image:
        "https://pplx-res.cloudinary.com/image/upload/v1725816610/ai_generated_images/ug5oyuitqapafuhsxrdq.png",
      currency: "$",
    },
    {
      id: 4,
      name: "Кроссовки",
      price: 89.99,
      image:
        "https://pplx-res.cloudinary.com/image/upload/v1725816719/ai_generated_images/jk7ya9bvevopfavwvozp.png",
      currency: "$",
    },
    {
      id: 5,
      name: "Рубашка",
      price: 34.99,
      image:
        "https://pplx-res.cloudinary.com/image/upload/v1725816768/ai_generated_images/lci5u19mthbxa96enay5.png",
      currency: "$",
    },
    {
      id: 6,
      name: "Шорты",
      price: 29.99,
      image:
        "https://pplx-res.cloudinary.com/image/upload/v1725816830/ai_generated_images/cpjocahccsxqbp8yydlu.png",
      currency: "$",
    },
    {
      id: 7,
      name: "Свитер",
      price: 59.99,
      image:
        "https://pplx-res.cloudinary.com/image/upload/v1725816863/ai_generated_images/mixemjr80gjbr27vuxd3.png",
      currency: "$",
    },
    {
      id: 8,
      name: "Куртка",
      price: 99.99,
      image:
        "https://pplx-res.cloudinary.com/image/upload/v1725816906/ai_generated_images/uxkgomymejfoxs0pdtl1.png",
      currency: "$",
    },
  ];

  return (
    <section className="catalog">
      <h2>Каталог товаров</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
