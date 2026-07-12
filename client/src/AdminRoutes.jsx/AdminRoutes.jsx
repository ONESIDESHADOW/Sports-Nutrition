import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "../admin/components/layout/AdminLayout";

import Dashboard from "../admin/pages/Dashboard";
import Login from "../admin/pages/Login";

import ProductList from "../admin/pages/products/ProductList";
import AddProduct from "../admin/pages/products/AddProduct";
import EditProduct from "../admin/pages/products/EditProduct";

import CategoryList from "../admin/pages/category/CategoryList";

import BannerList from "../admin/pages/banner/BannerList";

import OfferList from "../admin/pages/offer/OfferList";

import TestimonialList from "../admin/pages/testimonial/TestimonialList";

import InquiryList from "../admin/pages/inquiry/InquiryList";

import NewsletterList from "../admin/pages/newsletter/NewsletterList";

const AdminRoutes = () => {
  return (
    <Routes>

      {/* Login */}

      <Route path="/login" element={<Login />} />

      {/* Admin Layout */}

      <Route path="/" element={<AdminLayout />}>

        <Route index element={<Dashboard />} />

        <Route path="products" element={<ProductList />} />

        <Route path="products/add" element={<AddProduct />} />

        <Route path="products/edit/:id" element={<EditProduct />} />

        <Route path="categories" element={<CategoryList />} />

        <Route path="banners" element={<BannerList />} />

        <Route path="offers" element={<OfferList />} />

        <Route
          path="testimonials"
          element={<TestimonialList />}
        />

        <Route
          path="inquiries"
          element={<InquiryList />}
        />

        <Route
          path="newsletter"
          element={<NewsletterList />}
        />

      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
};

export default AdminRoutes;