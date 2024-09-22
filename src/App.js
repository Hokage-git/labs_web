import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import News from "./components/News";
import Catalog from "./components/Catalog";
import Delivery from "./components/Delivery";
import Contacts from "./components/Contacts";
import OrderForm from "./components/OrderForm";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {  
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="section">
                    <News />
                  </section>
                  <section className="section">
                    <Catalog />
                  </section>
                  <section className="section">
                    <Delivery />
                  </section>
                  <section className="section">
                    <Contacts />
                  </section>
                </>
              }
            />
            <Route path="/order" element={<OrderForm />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
