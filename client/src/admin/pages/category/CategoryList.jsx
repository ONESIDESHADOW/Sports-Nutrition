import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryToolbar from "../../components/categories/CategoryToolbar";
import CategoryTable from "../../components/categories/CategoryTable";

import useCategories from "../../../hooks/useCategories";

const CategoryList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const {
    data,
    isLoading,
    refetch,
  } = useCategories();

  const categories =
    data?.categories || data || [];

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {

      const matchSearch =
        category.name
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchStatus =
        status === ""
          ? true
          : category.isActive ===
            (status === "true");

      return (
        matchSearch &&
        matchStatus
      );

    });
  }, [
    categories,
    search,
    status,
  ]);

  if (isLoading)
    return <div>Loading...</div>;

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Categories
        </h1>

      </div>

      <CategoryToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onRefresh={refetch}
        onAdd={() =>
          navigate("/categories/add")
        }
      />

      <CategoryTable
        categories={filteredCategories}
      />

    </div>
  );
};

export default CategoryList;