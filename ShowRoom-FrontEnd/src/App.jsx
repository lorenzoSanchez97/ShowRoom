import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Modal from "./components/Modal/Modal"
import UserProfile from "./components/UserProfile/UserProfile"
import SideMenu from "./components/SideMenu/SideMenu"
import AllProductsList from "./pages/AllProductsList/AllProductsList"
import DashboardSideMenu from "./components/DashboardSideMenu/SideMenu"
import DashboardHome from "./pages/DashboardHome/DashboardHome"
import DashboardUsers from "./pages/DashboardUsers/DashboardUsers"
import DashboardProducts from "./pages/DashboardProducts/DashboardProducts"
import DashboardCategories from "./pages/DashboardCategories/DashboardCategories"
import DashboardSales from "./pages/DashboardSales/DashboardSales"
import DashboardBalance from "./pages/DashboardBalance/DashboardBalance"
import { modalContext } from "./contexts/modalContext"

function App() {

  let [modal, setModal] = useState("")
  let [sideMenu, setSideMenu] = useState(false)

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <modalContext.Provider value={{ userOperation: modal, setModal: setModal }}>
                {sideMenu && <SideMenu setSideMenu={setSideMenu} />}
                <Header setSideMenu={setSideMenu} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<AllProductsList />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/productDetail" element={<ProductDetail />} />
                  <Route path="/profile" element={<UserProfile />} />
                </Routes>
                {modal ? <Modal /> : null}
              </modalContext.Provider>
              <Footer />
            </>
          }
        />

        <Route

          path="/dashboard/*"
          element={
            <>
              <DashboardSideMenu />
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/users" element={<DashboardUsers />} />
                <Route path="/products" element={<DashboardProducts />} />
                <Route path="/categories" element={<DashboardCategories />} />
                <Route path="/sales" element={<DashboardSales />} />
                <Route path="/financial-balance" element={<DashboardBalance />} />
              </Routes>
            </>
          }
        />

      </Routes>
    </>
  );
}

export default App;