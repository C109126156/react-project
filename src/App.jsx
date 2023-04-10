import React, { Component } from "react";
import Home from "./Home";
import ShopperInfo from "./ShopperInfo";
import MemLogin from "./MemLogin";
import ShoperLogin from "./ShoperLogin";
import DefaultNavBar from "./DefaultNavBar";
import ShoperNavBar from "./ShoperNavBar";
import MemNavBar from "./MemNavBar";
import Introduction from "./Introduction";
import DefaultOrderCheck from "./DefaultOrderCheck";
import MemOrderCheck from "./MemOrderCheck";
import ShoperOrderCheck from "./ShoperOrderCheck";
import DefaultNotification from "./DefaultNotification";
import MemNotification from "./MemNotification";
import ShoperNotification from "./ShoperNotification";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";
import MemRegister from "./MemRegister";
import ShoperRegister from "./ShoperRegister";
import ForgotPass from "./ForgotPass";
import PassRevise from "./PassRevise";
import LoginIdentityChoose from "./LoginIdentityChoose";
import HandiheShop from "./HandiheShop";
import HandiheProduct from "./HandiheProduct";
import Social from "./Social";
import GroupPurchase from "./GroupPurchase";
import ShoperPurSetting from "./ShoperPurSetting";
import MemProfileRevise from "./MemProfileRevise";
import ShoperProfileRevise from "./ShoperProfileRevise";

import CustomersList from "./參考/Customerslist";
import ShoppingCart from "./參考/ShoppingCart";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      identity: "Shoper",
    };
  }

  render() {
    return (
      <BrowserRouter>
        {this.SwitchNavBar(this.state.isLogin, this.state.identity)}

        <div className="container-fluid pad-0">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shopperinfo" exact element={<ShopperInfo />} />
            <Route path="/introduction" exact element={<Introduction />} />
            <Route
              path="/defaultordercheck"
              exact
              element={<DefaultOrderCheck />}
            />
            <Route path="/memordercheck" exact element={<MemOrderCheck />} />
            <Route
              path="/Shoperordercheck"
              exact
              element={<ShoperOrderCheck />}
            />
            <Route
              path="/defaultnotification"
              element={<DefaultNotification />}
            />
            <Route path="/memnotification" element={<MemNotification />} />
            <Route
              path="/shopernotification"
              element={<ShoperNotification />}
            />

            <Route path="/handiheshop" exact element={<HandiheShop />} />
            <Route path="/handiheproduct" exact element={<HandiheProduct />} />

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
              path="/login/memlogin/memprofilerevise"
              element={<MemProfileRevise />}
            />
            <Route
              path="/login/shoperlogin/shoperregister"
              element={<ShoperRegister />}
            />
            <Route
              path="/login/shoperlogin/shoperprofilerevise"
              element={<ShoperProfileRevise />}
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

  SwitchNavBar = (isLogin, identity) => {
    if (this.state.isLogin && this.state.identity === "Mem")
      return <MemNavBar />;
    else if (this.state.isLogin && this.state.identity === "Shoper")
      return <ShoperNavBar />;
    else return <DefaultNavBar />;
  };
}
