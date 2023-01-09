import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import OnePokemon from "./pages/OnePokemon";
import "./App.css";
import { useEffect, useState } from "react";
import Register from "./component/Register/Register";
import LogIn from "./component/Register/LogIn";
import Account from "./pages/Account";
import { CartProvider } from "react-use-cart";

function App() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (localStorage.userInfo) setUserInfo(localStorage.userInfo);
  }, []);
  return (
    <div className="app">
      <CartProvider>
        <Routes>
          {userInfo ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<OnePokemon />} />
              <Route path="/account" element={<Account />} />
            </>
          ) : (
            <>
              <Route path="/" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
