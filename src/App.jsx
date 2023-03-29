import React, { Component } from "react";
import Home from "./Home";
import ShopperInfo from "./ShopperInfo";
import MemLogin from "./MemLogin";
import ShoperLogin from "./ShoperLogin";
import NavBar from "./NavBar";
import Introduction from "./Introduction";
import OrderCheck from "./OrderCheck";
import Notification from "./Notification";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";
import MemRegister from "./MemRegister";
import ShoperRegister from "./ShoperRegister";
import ForgotPass from "./ForgotPass";
import PassRevise from "./PassRevise";
import LoginIdentityChoose from "./LoginIdentityChoose";
import HandiheShop from "./HandiheShop";
import Social from "./Social";
import GroupPurchase from "./GroupPurchase";
import ShoperPurSetting from "./ShoperPurSetting";

import CustomersList from "./參考/Customerslist";
import ShoppingCart from "./參考/ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />

        <div className="container-fluid pad-0">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shopperinfo" exact element={<ShopperInfo />} />
            <Route path="/introduction" exact element={<Introduction />} />
            <Route path="/ordercheck" exact element={<OrderCheck />} />
            <Route path="/notification" element={<Notification />} />

            <Route path="/handiheshop" exact element={<HandiheShop />} />
            <Route path="/social" exact element={<Social />} />
            <Route path="/grouppurchase" exact element={<GroupPurchase />} />

            <Route
              path="/loginidentitychoose"
              element={<LoginIdentityChoose />}
            />
            <Route path="/login/memlogin" element={<MemLogin />} />
            <Route path="/login/shoperlogin" element={<ShoperLogin />} />

            <Route
              path="/login/memlogin/memregister"
              element={<MemRegister />}
            />
            <Route
              path="/login/memlogin/shoperregister"
              element={<ShoperRegister />}
            />

            <Route path="/login/forgotpass" element={<ForgotPass />} />
            <Route
              path="/login/forgotpass/passrevise"
              element={<PassRevise />}
            />

            <Route path="/shoperpursetting" element={<ShoperPurSetting />} />

            <Route path="/custlist" element={<CustomersList />} />
            <Route path="/cart" element={<ShoppingCart />} />

            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
