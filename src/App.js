import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import UserCartDetails from "./pages/user/UserCartDetails";
import UserOrderDetails from "./pages/user/UserOrderDetails";
import UserOrders from "./pages/user/UserOrders";
import UserProfile from "./pages/user/UserProfile";
/*components*/
import Footer from "./components/Footer";
import Header from "./components/Header";
/*user components*/
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

import ProductedRoutes from "./components/ProtectedRoutes";
/*admin*/
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrdersDetails from "./pages/admin/AdminOrdersDetails";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminProductPage from "./pages/admin/AdminProductPage";

/*user chat component*/

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page is not exist 404"></Route>
        </Route>
        <Route element={<ProductedRoutes admin={false} />}>
          <Route path="/user" element={<UserProfile />} />
          <Route path="/user/my-orders" element={<UserOrders />} />
          <Route path="/user/cart-details" element={<UserCartDetails />} />
          <Route path="/user/order-details" element={<UserOrderDetails />} />
        </Route>

        {/*admin protected routes*/}
        <Route element={<ProductedRoutes admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/edit-user" element={<AdminUsersPage />} />
          <Route
            path="/admin/analytics-page"
            element={<AdminAnalyticsPage />}
          />
          <Route
            path="/admin/orders-details"
            element={<AdminOrdersDetails />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
