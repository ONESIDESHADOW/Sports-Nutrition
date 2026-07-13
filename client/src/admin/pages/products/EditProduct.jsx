import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import ProductForm from "./ProductForm";
import {
  getProduct,
  updateProduct,
} from "../../../services/product.service";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await getProduct(id);
      return res.data;
    },
    enabled: !!id,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData) => updateProduct(id, formData),

    onSuccess: () => {
      toast.success("Product updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      queryClient.invalidateQueries({
        queryKey: ["product", id],
      });

      navigate("/products");
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to update product"
      );
    },
  });

  const handleSubmit = (formData) => {
    mutate(formData);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-10 text-center">
        Loading Product...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-xl p-10 text-center text-red-500">
        Failed to load product.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Product
        </h1>

        <p className="text-gray-500 mt-2">
          Update your product information.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <ProductForm
          initialData={data}
          onSubmit={handleSubmit}
        />

      </div>

      {isPending && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl p-6">
            Updating Product...
          </div>

        </div>
      )}

    </div>
  );
};

export default EditProduct;