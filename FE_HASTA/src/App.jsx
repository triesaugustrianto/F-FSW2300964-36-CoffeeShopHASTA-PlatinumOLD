import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  ForgotPassword,
  Home,
  Login,
  Menu,
  NotFound,
  SignUp,
  Stores,
} from "./pages/landing";
import NavBar from "./components/NavBar";
import {
  AkunUser,
  Checkout,
  Daftar,
  HomeUser,
  Order,
  Pesanan,
  PesananUser,
  Users,
} from "./pages/user";
import { useState } from "react";
import { CreateProduct, Dashboard, EditProduct } from "./pages/admin";
import Navigation from "./pages/admin/navigation/navigation.component";
import OrderTable from "./pages/admin/order/order-table.component";
import ProductTable from "./pages/admin/product/product-table.component";
import { UserDsb } from "./pages/admin/User/user";
import RegisterAdmin from "./pages/landing/RegisterAdmin";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const [isAdmin, setIsAdmin] = useState(false);
  if (isAdmin) {
    return (
      <>
        {/* ROUTES LANDING DASHBOARD */}

        <Routes>
          <Route path="/dsb" element={<Navigation />}>
            <Route path="product" element={<ProductTable />} />
            <Route path="order" element={<OrderTable />} />
            <Route path="user" element={<UserDsb />} />
            <Route path="product/edit/:id" element={<EditProduct />} />
            <Route path="product/create" element={<CreateProduct />} />
            edit
          </Route>
        </Routes>
      </>
    );
  }

  if (isLogin) {
    return (
      <>
        {/* ROUTES LANDING PAGE */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/stores" element={<Stores />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}>
            <Route path="admin" element={<RegisterAdmin />} />           
          </Route>
          <Route path="/forgot" element={<ForgotPassword />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </>
    );
  }

  if (!isLogin) {
    return (
      <>
        <Routes>
          <Route path="/user" element={<Users />}>
            <Route path="" element={<HomeUser />} />
            <Route path="menu" element={<Daftar />} />
            <Route path="menu/co/:id" element={<Order />} />
            <Route path="order" element={<PesananUser />}>
              <Route path="" element={<Checkout />} />
              <Route path="pesanan" element={<Pesanan />} />
            </Route>
            <Route path="akun" element={<AkunUser />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
