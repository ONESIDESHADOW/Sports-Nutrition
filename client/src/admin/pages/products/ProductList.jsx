import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductToolbar from "../../components/products/ProductToolbar";
import ProductTable from "../../components/products/ProductTable";

const ProductList = () => {
  const navigate = useNavigate();

  // Search State
  const [search, setSearch] = useState("");

  // Category Filter
  const [category, setCategory] = useState("");

  // Status Filter
  const [status, setStatus] = useState("");

  // Dummy Categories (Replace with API later)
  const categories = [
    {
      _id: "1",
      name: "Protein",
    },
    {
      _id: "2",
      name: "Mass Gainer",
    },
    {
      _id: "3",
      name: "Creatine",
    },
    {
      _id: "4",
      name: "Fat Burner",
    },
  ];

  // Dummy Products (Replace with Backend API)
  const products = [
    {
      _id: "1",
      name: "Robinson Zero Whey",
      category: {
        _id: "1",
        name: "Protein",
      },
      price: 5499,
      stock: 15,
      featured: true,
      isActive: true,
      images: [
        {
          url: "https://placehold.co/100x100",
        },
      ],
    },
    {
      _id: "2",
      name: "Fitsique Anabolic Mass",
      category: {
        _id: "2",
        name: "Mass Gainer",
      },
      price: 3499,
      stock: 28,
      featured: false,
      isActive: true,
      images: [
        {
          url: "https://placehold.co/100x100",
        },
      ],
    },
    {
      _id: "3",
      name: "L-Carnitine",
      category: {
        _id: "4",
        name: "Fat Burner",
      },
      price: 1299,
      stock: 50,
      featured: true,
      isActive: false,
      images: [
        {
          url: "https://placehold.co/100x100",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Products
          </h1>

          <p className="text-slate-500 mt-1">
            Manage all your gym supplements and nutrition products.
          </p>
        </div>
      </div>

      {/* Toolbar */}

      <ProductToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        categories={categories}
        onRefresh={() => console.log("Refresh Products")}
        onAdd={() => navigate("/products/add")}
      />

      {/* Product Table */}

      <ProductTable products={products} />
    </div>
  );
};

export default ProductList;