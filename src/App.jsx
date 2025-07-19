import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RoutePage from "./routes/RoutePage";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <>
    <div>
      <ToastContainer position="bottom-right" autoClose={3000}  className="custom-toast-container"/>
      <Header />
      <Navbar />
      <RoutePage />
      <Footer />


    </div>
   
    </>
  );
}

export default App;
