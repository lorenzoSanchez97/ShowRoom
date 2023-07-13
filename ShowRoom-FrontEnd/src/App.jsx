import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Modal from "./components/Modal/Modal"

function App() {

  let [modal, setModal] = React.useState("")

  const setModalStatus = (data) => {
    setModal(data)
  }

  return (
    <>
      <Header sendDataToApp={setModalStatus} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
      {modal ? <Modal userOption={modal} setModalStatus={setModalStatus} /> : null}
      <Footer />
    </>
  );
}

export default App;
