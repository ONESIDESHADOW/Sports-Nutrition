import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductToolbar from "../../components/products/ProductToolbar";
import ProductTable from "../../components/products/ProductTable";
import useProducts from "../../../hooks/useProducts";

const ProductList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useProducts();

  const products = data?.products || data || [];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        !category ||
        product.category?._id === category;

      const matchStatus =
        status === ""
          ? true
          : product.isActive ===
            (status === "true");

      return (
        matchSearch &&
        matchCategory &&
        matchStatus
      );
    });
  }, [
    products,
    search,
    category,
    status,
  ]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-10 text-center">
        Loading Products...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-xl p-10 text-center text-red-500">
        Failed to load products.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <p className="text-gray-500">
          Manage all products.
        </p>

      </div>

      <ProductToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        categories={[]}
        onRefresh={refetch}
        onAdd={() =>
          navigate("/products/add")
        }
      />

      <ProductTable
        products={filteredProducts}
      />

    </div>
  );
};

export default ProductList;