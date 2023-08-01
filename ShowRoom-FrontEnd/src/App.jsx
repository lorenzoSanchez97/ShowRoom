import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Modal from "./components/Modal/Modal"
import UserProfile from "./components/UserProfile/UserProfile"
import SideMenu from "./components/SideMenu/SideMenu"
import { modalContext } from "./contexts/modalContext"

function App() {
  
  let [modal, setModal] = React.useState("")

  return (
    <>
      <modalContext.Provider value={{ modal: modal, setModal: setModal }}>
        <SideMenu />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        {modal ? <Modal userOption={modal} /> : null}
      </modalContext.Provider>
      <Footer />
    </>
  );
}

export default App;
