import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductToolbar from "../../components/products/ProductToolbar";

const ProductList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [status, setStatus] = useState("");

  const categories = [];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Products
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your products
          </p>

        </div>

      </div>

      <ProductToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        categories={categories}
        onRefresh={() => {}}
        onAdd={() => navigate("/products/add")}
      />

      {/* Product Table will come here */}

      <div className="bg-white rounded-2xl shadow p-10 text-center">

        Product Table Coming Soon

      </div>
    </div>
  );
};

export default ProductList;