import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import CategoryForm from "./CategoryForm";
import { createCategory } from "../../../services/category.service";

const AddCategory = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createCategory,

    onSuccess: () => {
      toast.success("Category created successfully");

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });

      navigate("/categories");
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to create category"
      );
    },
  });

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Add Category
        </h1>

        <p className="text-gray-500">
          Create a new product category.
        </p>

      </div>

      <CategoryForm
        onSubmit={mutate}
        loading={isPending}
      />

    </div>
  );
};

export default AddCategory;