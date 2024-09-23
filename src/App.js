import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import News from "./components/News";
import Catalog from "./components/Catalog";
import Delivery from "./components/Delivery";
import Contacts from "./components/Contacts";
import OrderForm from "./components/OrderForm";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AdminPanel from "./components/AdminPanel";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminPanel />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
