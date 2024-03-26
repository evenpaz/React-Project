import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import AboutUsPage from "./pages/aboutUS/AboutUsPage";
import ProductsPage from "./pages/products/ProductsPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import Login from "./pages/login/Login";
import MainAppHome from "./pages/mainApp-home/MainAppHome";
import Availability from "./pages/availability/Availability";
import Employees from "./pages/employees/Employees";
import Reports from "./pages/reports/Reports";
import Rota from "./pages/rota/Rota";
import CostumersProvider from "./context/CostumersProvider";
import Page404 from "./pages/page-404/Page-404";
import App_adminLogin from "./pages/app_adminLogin/App_adminLogin";
import App_adminPage from "./pages/app_adminPage/App_adminPage";

function App() {
  return (
    <>
      <CostumersProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/home" element={<MainAppHome />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/rota" element={<Rota />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-login" element={<App_adminLogin />} />
            <Route path="/admin-page" element={<App_adminPage />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </CostumersProvider>
    </>
  );
}

export default App;
