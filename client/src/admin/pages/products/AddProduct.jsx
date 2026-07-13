import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import ProductForm from "./ProductForm";
import { createProduct } from "../../../services/product.service";

const AddProduct = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      toast.success("Product added successfully!");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      navigate("/products");
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong!"
      );
    },
  });

  const handleSubmit = (data) => {
    console.log("Product Data:", data);

    // If using FormData later
    // const formData = new FormData();
    // ...
    // mutate(formData);

    mutate(data);
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Add Product
          </h1>

          <p className="text-slate-500 mt-2">
            Create a new product for your store.
          </p>

        </div>

      </div>

      {/* Form Card */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <ProductForm
          onSubmit={handleSubmit}
        />

      </div>

      {/* Loading Overlay */}

      {isPending && (

        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">

          <div className="bg-white px-8 py-5 rounded-xl shadow-lg">

            <p className="font-semibold text-lg">
              Saving Product...
            </p>

          </div>

        </div>

      )}

    </div>
  );
};

export default AddProduct;