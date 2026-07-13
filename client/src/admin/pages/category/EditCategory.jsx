import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import CategoryForm from "./CategoryForm";
import {
  getCategory,
  updateCategory,
} from "../../../services/category.service";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      const res = await getCategory(id);
      return res.data;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData) =>
      updateCategory(id, formData),

    onSuccess: () => {
      toast.success("Category updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });

      navigate("/categories");
    },

    onError: () => {
      toast.error("Failed to update category");
    },
  });

  if (isLoading)
    return <div>Loading...</div>;

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Category
        </h1>

      </div>

      <CategoryForm
        initialData={data}
        onSubmit={mutate}
        loading={isPending}
      />

    </div>
  );
};

export default EditCategory;