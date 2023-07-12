import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Modal from "./components/Modal/Modal"

function App() {

  let [login, setLogin] = React.useState("")
  let [register, setRegister] = React.useState("")

  const handleDataFromHeader = (data) => {
    if (data === "register") {
      setRegister(data)
    } else if (data === "login") {
      setLogin(data)
    }
  }

  return (
    <>
      <Header sendDataToApp={handleDataFromHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
      {login || register ? <Modal userOption={login ? login : register} /> : null}
      <Footer />
    </>
  );
}

export default App;
