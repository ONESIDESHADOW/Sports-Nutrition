import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryToolbar from "../../components/categories/CategoryToolbar";
import CategoryTable from "../../components/categories/CategoryTable";

const CategoryList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Categories
        </h1>

        <p className="text-gray-500">
          Manage product categories.
        </p>

      </div>

      <CategoryToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onRefresh={() => {}}
        onAdd={() =>
          navigate("/categories/add")
        }
      />

      <CategoryTable
        categories={[]}
      />

    </div>
  );
};

export default CategoryList;